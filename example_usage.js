
import * as Integra from "satel-integra-integration-protocol/messages";
import IntegraDecoder from "satel-integra-integration-protocol/decoder";

import { Socket } from "net";
import { setInterval as setIntervalAsync } from 'node:timers/promises';

const integraIP='10.1.173.220';
const integraPort=7094;
const maxZones = 5;

let zoneNames = [];

let sock = new Socket();

let fullFrameReceived = () => {};
let readZoneNames = 0;
async function mainLoop() {
    
    console.log('Main loop started');
    
    let interval = setIntervalAsync(2500, Date.now());
    let frameReceived = Promise.resolve();

    let zoneViolCmd = Integra.encodeZonesViolationCommand();

    while (true) {

        await frameReceived;
        frameReceived = new Promise( (r) => fullFrameReceived = r );

        if (readZoneNames < maxZones) {
            sock.write(
                Integra.encodeReadDeviceName(Integra.DeviceType.Zone,++readZoneNames));
        }
        else  {
            sock.write(zoneViolCmd);
            await interval.next();
        }
    }
}

function handleMessage(message) {

    if (message instanceof Integra.ReadDeviceNameAnswer) {
        console.log(`Zone ${message.number}: ${message.name}`);
        zoneNames[message.number] = message.name;
        return;
    }

    console.clear();
    if (message instanceof Integra.ZonesViolationAnswer) {

        const flags = message.flags;
        
        let dots = flags.reduce( (a,v) =>  a + (v?"●": "·"),"").match(new RegExp(".{1,16}","g"));
        for (let l of dots) {
            console.log(l);
        }
        
    }
}

sock.on('connect', () => {
    console.log('Connected');
    mainLoop();
});

sock.on('close', () => {
	console.log('connection closed');
	process.exit(0);
});

sock.on("error", (e) => { 
    console.log(`error: ${e}`); 
    process.exit(1); 
});

let decoder = new IntegraDecoder();
sock.on('data', (data) => {

    for (let b of data) {
        if (decoder.addByte(b)) {
            fullFrameReceived();
            let message = Integra.decodeMessage(decoder);
            if (message)
                handleMessage(message);
        }
    }

});

sock.connect(integraPort, integraIP);

