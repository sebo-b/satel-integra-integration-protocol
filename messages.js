const Crc = require("./crc");
const Decoder = require("./decoder");
const Encoder = require("./encoder");
const message_impl = require("./messages_impl");

function encodeZonesViolationCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesViolation);
}

function encodeZonesViolation256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ZonesViolation, 0x00])
  );
}

function encodeZonesTamperCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesTamper);
}

function encodeZonesTamper256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ZonesTamper, 0x00])
  );
}

function encodeZonesAlarmCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesAlarm);
}

function encodeZonesAlarm256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ZonesAlarm, 0x00])
  );
}

function encodeZonesTamperAlarmCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.ZonesTamperAlarm
  );
}

function encodeZonesTamperAlarm256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ZonesTamperAlarm, 0x00])
  );
}

function encodeZonesAlarmMemoryCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.ZonesAlarmMemory
  );
}

function encodeZonesAlarmMemory256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ZonesAlarmMemory, 0x00])
  );
}

function encodeZonesTamperAlarmMemoryCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.ZonesTamperAlarmMemory
  );
}

function encodeZonesTamperAlarmMemory256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ZonesTamperAlarmMemory, 0x00])
  );
}

function encodeZonesBypassStatusCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.ZonesBypassStatus
  );
}

function encodeZonesBypassStatus256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ZonesBypassStatus, 0x00])
  );
}

function encodeZonesNoViolationTroubleCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.ZonesNoViolationTrouble
  );
}

function encodeZonesNoViolationTrouble256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ZonesNoViolationTrouble, 0x00])
  );
}

function encodeZonesLongViolationTroubleCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.ZonesLongViolationTrouble
  );
}

function encodeZonesLongViolationTrouble256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ZonesLongViolationTrouble, 0x00])
  );
}

function encodeArmedPartitionsSuppressedCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.ArmedPartitionsSuppressed
  );
}

function encodeArmedPartitionsReallyCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.ArmedPartitionsReally
  );
}

function encodePartitionsArmedInMode2Command() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.PartitionsArmedInMode2
  );
}

function encodePartitionsArmedInMode3Command() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.PartitionsArmedInMode3
  );
}

function encodePartitionsWith1stCodeEnteredCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.PartitionsWith1stCodeEntered
  );
}

function encodePartitionsEntryTimeCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.PartitionsEntryTime
  );
}

function encodePartitionsExitTimeMoreThen10sCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.PartitionsExitTimeMoreThen10s
  );
}

function encodePartitionsExitTimeLessThen10sCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.PartitionsExitTimeLessThen10s
  );
}

function encodePartitionsTemporaryBlockedCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.PartitionsTemporaryBlocked
  );
}

function encodePartitionsBlockedForGuardRoundCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.PartitionsBlockedForGuardRound
  );
}

function encodePartitionsAlarmCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.PartitionsAlarm
  );
}

function encodePartitionsFireAlarmCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.PartitionsFireAlarm
  );
}

function encodePartitionsAlarmMemoryCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.PartitionsAlarmMemory
  );
}

function encodePartitionsFireAlarmMemoryCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.PartitionsFireAlarmMemory
  );
}

function encodeZonesIsolateStateCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.ZonesIsolateState
  );
}

function encodeZonesIsolateState256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ZonesIsolateState, 0x00])
  );
}

function encodeZonesMaskedCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.ZonesMasked);
}

function encodeZonesMasked256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ZonesMasked, 0x00])
  );
}

function encodeZonesMaskedMemoryCommand() {
  return message_impl.encodeNoDataCommand(
    message_impl.Commands.ZonesMaskedMemory
  );
}

function encodeZonesMaskedMemory256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ZonesMaskedMemory, 0x00])
  );
}

function encodeOutputsStateCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.OutputsState);
}

function encodeOutputsState256Command() {
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.OutputsState, 0x00])
  );
}

function encodeNewDataCommand() {
  return message_impl.encodeNoDataCommand(message_impl.Commands.NewData);
}

function encodeArmInMode0Command(prefixAndUserCode, partitions) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.ArmInMode0,
    prefixAndUserCode,
    partitions,
    "partitions",
    [32]
  );
}

function encodeArmInMode1Command(prefixAndUserCode, partitions) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.ArmInMode1,
    prefixAndUserCode,
    partitions,
    "partitions",
    [32]
  );
}

function encodeArmInMode2Command(prefixAndUserCode, partitions) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.ArmInMode2,
    prefixAndUserCode,
    partitions,
    "partitions",
    [32]
  );
}

function encodeArmInMode3Command(prefixAndUserCode, partitions) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.ArmInMode3,
    prefixAndUserCode,
    partitions,
    "partitions",
    [32]
  );
}

function encodeDisarmCommand(prefixAndUserCode, partitions) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.Disarm,
    prefixAndUserCode,
    partitions,
    "partitions",
    [32]
  );
}

function encodeClearAlarmCommand(prefixAndUserCode, partitions) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.ClearAlarm,
    prefixAndUserCode,
    partitions,
    "partitions",
    [32]
  );
}

function encodeForceArmInMode0Command(prefixAndUserCode, partitions) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.ForceArmInMode0,
    prefixAndUserCode,
    partitions,
    "partitions",
    [32]
  );
}

function encodeForceArmInMode1Command(prefixAndUserCode, partitions) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.ForceArmInMode1,
    prefixAndUserCode,
    partitions,
    "partitions",
    [32]
  );
}

function encodeForceArmInMode2Command(prefixAndUserCode, partitions) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.ForceArmInMode2,
    prefixAndUserCode,
    partitions,
    "partitions",
    [32]
  );
}

function encodeForceArmInMode3Command(prefixAndUserCode, partitions) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.ForceArmInMode3,
    prefixAndUserCode,
    partitions,
    "partitions",
    [32]
  );
}

function encodeOutputsOnCommand(prefixAndUserCode, outputs) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.OutputsOn,
    prefixAndUserCode,
    outputs,
    "outputs",
    [128, 256]
  );
}

function encodeOutputsOffCommand(prefixAndUserCode, outputs) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.OutputsOff,
    prefixAndUserCode,
    outputs,
    "outputs",
    [128, 256]
  );
}

function encodeOutputsSwitchCommand(prefixAndUserCode, outputs) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.OutputsSwitch,
    prefixAndUserCode,
    outputs,
    "outputs",
    [128, 256]
  );
}

function encodeZonesBypassCommand(prefixAndUserCode, zones) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.ZonesBypass,
    prefixAndUserCode,
    zones,
    "zones",
    [128, 256]
  );
}

function encodeZonesUnbypassCommand(prefixAndUserCode, zones) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.ZonesUnbypass,
    prefixAndUserCode,
    zones,
    "zones",
    [128, 256]
  );
}

function encodeZonesIsolateCommand(prefixAndUserCode, zones) {
  return message_impl.encodeFlagsArrayWithCodeCommand(
    message_impl.Commands.ZonesIsolate,
    prefixAndUserCode,
    zones,
    "zones",
    [128, 256]
  );
}

const DeviceType = Object.freeze({
  Partition: 0,
  Zone: 1,
  User: 2,
  Expander: 3,
  Output: 4,
  ZoneWithPartition: 5,
  Timer: 6,
  Telephone: 7,
  Object: 15,
  Partition: 16,
  Output: 17,
  PartitionWithOptions: 18,
  PartitionWithOptionsAndDependent: 19,
});

function encodeReadDeviceName(deviceType, deviceNo) {  
  
  const devNoRanges = {
    [DeviceType.Partition]: [1,32],
    [DeviceType.Zone]: [1,256],
    [DeviceType.User]: [1,255],
    [DeviceType.Expander]: [129,210],
    [DeviceType.Output]: [1,256],
    [DeviceType.ZoneWithPartition]: [1,32],
    [DeviceType.Timer]: [1,64],
    [DeviceType.Telephone]: [1,16],
    [DeviceType.Object]: [1,8],
    [DeviceType.Partition]: [1,32],
    [DeviceType.Output]: [1,256],
    [DeviceType.PartitionWithOptions]: [1,32],
    [DeviceType.PartitionWithOptionsAndDependent]: [1,32]
  };

  if (!devNoRanges[deviceType])
    throw new Error("Unknown deviceType");
  
  if (deviceNo < devNoRanges[deviceType][0] || deviceNo > devNoRanges[deviceType][1])
    throw new Error(`deviceNo ${deviceNo} out of range (${devNoRanges[deviceType][0]}-${devNoRanges[deviceType][1]}), for the given type ${deviceType}`);

  // send 0 instead of 256 in INTEGRA 256 Plus
  if (deviceNo === 256)
    deviceNo = 0;
      
  return message_impl.encodeNoDataCommand(
    Buffer.from([message_impl.Commands.ReadDeviceName, deviceType, deviceNo]));
}

class AnswerBase {
  
  #allowedLengths;

  constructor(allowedLengths) {
    this.#allowedLengths = new Set(allowedLengths);
  }

  decode(frame) {
    return this.#allowedLengths.has(frame.length);
  }

};

class FlagArrayAnswer extends AnswerBase {
  
  constructor(allowedLengths) {
    super(allowedLengths);
  }

  decode(frame) {

    if (!super.decode(frame))
      return false;

    this._flags = new Array();
    for (let byte of frame) {
      for (let i = 0; i < 8; ++i, byte >>= 1) {
        this._flags.push( (byte & 1) != 0);
      }
    }

    return true;
  }

  get flags() {
    return [...this._flags];
  }
}

class ZonesViolationAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class ZonesTamperAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class OutputsStateAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class ZonesAlarmAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class ZonesTamperAlarmAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class ZonesAlarmMemoryAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class ZonesTamperAlarmMemoryAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class ZonesBypassStatusAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class ZonesNoViolationTroubleAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class ZonesLongViolationTroubleAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class ArmedPartitionsSuppressedAnswer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class ArmedPartitionsReallyAnswer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class PartitionsArmedInMode2Answer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class PartitionsArmedInMode3Answer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class PartitionsWith1stCodeEnteredAnswer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class PartitionsEntryTimeAnswer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class PartitionsExitTimeMoreThen10sAnswer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class PartitionsExitTimeLessThen10sAnswer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class PartitionsTemporaryBlockedAnswer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class PartitionsBlockedForGuardRoundAnswer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class PartitionsAlarmAnswer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class PartitionsFireAlarmAnswer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class PartitionsAlarmMemoryAnswer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class PartitionsFireAlarmMemoryAnswer extends FlagArrayAnswer {
  constructor() {
    super([4]);
  }
}

class ZonesIsolateStateAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class ZonesMaskedAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class ZonesMaskedMemoryAnswer extends FlagArrayAnswer {
  constructor() {
    super([16, 32]);
  }
}

class NewDataAnswer extends FlagArrayAnswer {
  constructor() {
    super([5, 6, 7]);
  }

  zonesViolationChanged() {
    return this._flags[message_impl.Commands.ZonesViolation];
  }

  zonesTamperChanged() {
    return this._flags[message_impl.Commands.ZonesTamper];
  }

  outputsStateChanged() {
    return this._flags[message_impl.Commands.OutputsState];
  }

  zonesAlarmChanged() {
    return this._flags[message_impl.Commands.ZonesAlarm];
  }

  zonesTamperAlarmChanged() {
    return this._flags[message_impl.Commands.ZonesTamperAlarm];
  }

  zonesAlarmMemoryChanged() {
    return this._flags[message_impl.Commands.ZonesAlarmMemory];
  }

  zonesTamperAlarmMemoryChanged() {
    return this._flags[message_impl.Commands.ZonesTamperAlarmMemory];
  }

  zonesBypassStatusChanged() {
    return this._flags[message_impl.Commands.ZonesBypassStatus];
  }

  zonesNoViolationTroubleChanged() {
    return this._flags[message_impl.Commands.ZonesNoViolationTrouble];
  }

  zonesLongViolationTroubleChanged() {
    return this._flags[message_impl.Commands.ZonesLongViolationTrouble];
  }

  armedPartitionsSuppressedChanged() {
    return this._flags[message_impl.Commands.ArmedPartitionsSuppressed];
  }

  armedPartitionsReallyChanged() {
    return this._flags[message_impl.Commands.ArmedPartitionsReally];
  }

  partitionsArmedInMode2Changed() {
    return this._flags[message_impl.Commands.PartitionsArmedInMode2];
  }

  partitionsArmedInMode3Changed() {
    return this._flags[message_impl.Commands.PartitionsArmedInMode3];
  }

  partitionsWith1stCodeEnteredChanged() {
    return this._flags[message_impl.Commands.PartitionsWith1stCodeEntered];
  }

  partitionsEntryTimeChanged() {
    return this._flags[message_impl.Commands.PartitionsEntryTime];
  }

  partitionsExitTimeMoreThen10sChanged() {
    return this._flags[message_impl.Commands.PartitionsExitTimeMoreThen10s];
  }

  partitionsExitTimeLessThen10sChanged() {
    return this._flags[message_impl.Commands.PartitionsExitTimeLessThen10s];
  }

  partitionsTemporaryBlockedChanged() {
    return this._flags[message_impl.Commands.PartitionsTemporaryBlocked];
  }

  partitionsBlockedForGuardRoundChanged() {
    return this._flags[message_impl.Commands.PartitionsBlockedForGuardRound];
  }

  partitionsAlarmChanged() {
    return this._flags[message_impl.Commands.PartitionsAlarm];
  }

  partitionsFireAlarmChanged() {
    return this._flags[message_impl.Commands.PartitionsFireAlarm];
  }

  partitionsAlarmMemoryChanged() {
    return this._flags[message_impl.Commands.PartitionsAlarmMemory];
  }

  partitionsFireAlarmMemoryChanged() {
    return this._flags[message_impl.Commands.PartitionsFireAlarmMemory];
  }

  zonesIsolateStateChanged() {
    return this._flags[message_impl.Commands.ZonesIsolateState];
  }

  zonesMaskedChanged() {
    return this._flags[message_impl.Commands.ZonesMasked];
  }

  zonesMaskedMemoryChanged() {
    return this._flags[message_impl.Commands.ZonesMaskedMemory];
  }
}

class ReadDeviceNameAnswer extends AnswerBase {

  type;
  number;
  function;
  name;

  partitionNumber = null;
  serialNumber = null;
  objectNumber = null;
  paritionOptions1 = null;
  paritionOptions2 = null;
  outputDurationTime = null;
  autoArmDefer = null;
  autoArmDeferTime = null;
  timers = null;

  constructor() {
    super([19,20, 21, 24, 28]);
  }

  decode(frame) {

    // bun.js doesn't support cp1250, node does
    // we could import iconv, but it will create another dependency just for 256 bytes of mapping
    const cp1250map = 
        "\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}"+
        "\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}\u{FFFD}"+
        "\u{0020}\u{0021}\u{0022}\u{0023}\u{0024}\u{0025}\u{0026}\u{0027}\u{0028}\u{0029}\u{002A}\u{002B}\u{002C}\u{002D}\u{002E}\u{002F}"+
        "\u{0030}\u{0031}\u{0032}\u{0033}\u{0034}\u{0035}\u{0036}\u{0037}\u{0038}\u{0039}\u{003A}\u{003B}\u{003C}\u{003D}\u{003E}\u{003F}"+
        "\u{0040}\u{0041}\u{0042}\u{0043}\u{0044}\u{0045}\u{0046}\u{0047}\u{0048}\u{0049}\u{004A}\u{004B}\u{004C}\u{004D}\u{004E}\u{004F}"+
        "\u{0050}\u{0051}\u{0052}\u{0053}\u{0054}\u{0055}\u{0056}\u{0057}\u{0058}\u{0059}\u{005A}\u{005B}\u{005C}\u{005D}\u{005E}\u{005F}"+
        "\u{0060}\u{0061}\u{0062}\u{0063}\u{0064}\u{0065}\u{0066}\u{0067}\u{0068}\u{0069}\u{006A}\u{006B}\u{006C}\u{006D}\u{006E}\u{006F}"+
        "\u{0070}\u{0071}\u{0072}\u{0073}\u{0074}\u{0075}\u{0076}\u{0077}\u{0078}\u{0079}\u{007A}\u{007B}\u{007C}\u{007D}\u{007E}\u{007F}"+
        "\u{20AC}\u{FFFD}\u{201A}\u{FFFD}\u{201E}\u{2026}\u{2020}\u{2021}\u{FFFD}\u{2030}\u{0160}\u{2039}\u{015A}\u{0164}\u{017D}\u{0179}"+
        "\u{FFFD}\u{2018}\u{2019}\u{201C}\u{201D}\u{2022}\u{2013}\u{2014}\u{FFFD}\u{2122}\u{0161}\u{203A}\u{015B}\u{0165}\u{017E}\u{017A}"+
        "\u{00A0}\u{02C7}\u{02D8}\u{0141}\u{00A4}\u{0104}\u{00A6}\u{00A7}\u{00A8}\u{00A9}\u{015E}\u{00AB}\u{00AC}\u{00AD}\u{00AE}\u{017B}"+
        "\u{00B0}\u{00B1}\u{02DB}\u{0142}\u{00B4}\u{00B5}\u{00B6}\u{00B7}\u{00B8}\u{0105}\u{015F}\u{00BB}\u{013D}\u{02DD}\u{013E}\u{017C}"+
        "\u{0154}\u{00C1}\u{00C2}\u{0102}\u{00C4}\u{0139}\u{0106}\u{00C7}\u{010C}\u{00C9}\u{0118}\u{00CB}\u{011A}\u{00CD}\u{00CE}\u{010E}"+
        "\u{0110}\u{0143}\u{0147}\u{00D3}\u{00D4}\u{0150}\u{00D6}\u{00D7}\u{0158}\u{016E}\u{00DA}\u{0170}\u{00DC}\u{00DD}\u{0162}\u{00DF}"+
        "\u{0155}\u{00E1}\u{00E2}\u{0103}\u{00E4}\u{013A}\u{0107}\u{00E7}\u{010D}\u{00E9}\u{0119}\u{00EB}\u{011B}\u{00ED}\u{00EE}\u{010F}"+
        "\u{0111}\u{0144}\u{0148}\u{00F3}\u{00F4}\u{0151}\u{00F6}\u{00F7}\u{0159}\u{016F}\u{00FA}\u{0171}\u{00FC}\u{00FD}\u{0163}\u{02D9}"

    if (!super.decode(frame))
      return false;

    this.type = frame.readUInt8(0);
    this.number = frame.readUInt8(1);
    this.function = frame.readUInt8(2);
    
    let n = "";
    for (let i = 3; i < 19; ++i)
      n += cp1250map[frame.readUInt8(i)];
    this.name = n.trimEnd();

    switch (this.type) {
      case DeviceType.User: 
        this.serialNumber = frame.readUInt8(19); 
        break;

      case DeviceType.ZoneWithPartition: 
        this.partitionNumber = frame.readUInt8(19); 
        break;
      
      case DeviceType.Output: 
        this.outputDurationTime = frame.readUInt16BE(19) * 0.1;
        break;

      case DeviceType.PartitionWithOptionsAndDependent: 
        this.timers = [...frame.subarray(24,28)];
        // no break, PASS THROUGH

      case DeviceType.PartitionWithOptions:
        this.paritionOptions1 = frame.readUInt8(20);
        this.paritionOptions2 = frame.readUInt8(21);
        this.autoArmDeferTime = frame.readUInt16BE(22);
        
        switch (this.autoArmDeferTime >> 14) {
          case 0: this.autoArmDefer = 'inactive'; break;
          case 1: this.autoArmDefer = 'set'; break;
          case 2: this.autoArmDefer = 'running'; break;
          default: this.autoArmDefer = 'unknown';
        }
        this.autoArmDeferTime &= 0x3F;
        // no break, PASS THROUGH

      case DeviceType.Partition:
        this.objectNumber = frame.readUInt8(19); 
        break;

    }

    Object.freeze(this);
    return true;
  }
}

class CommandResultAnswer {
  decode(frame) {
    if (frame.length != 1) {
      return false;
    }
    this._resultCode = frame[0];
    switch (this._resultCode) {
      case CommandResultAnswer.ResultCodes.OK:
        this._resultMessage = "OK";
        break;
      case CommandResultAnswer.ResultCodes.UserCodeNotFound:
        this._resultMessage = "Requesting user code not found";
        break;
      case CommandResultAnswer.ResultCodes.NoAccess:
        this._resultMessage = "No access";
        break;
      case CommandResultAnswer.ResultCodes.UserDoesNotExist:
        this._resultMessage = "Selected user does not exist";
        break;
      case CommandResultAnswer.ResultCodes.UserAlreadyExists:
        this._resultMessage = "Selected user already exists";
        break;
      case CommandResultAnswer.ResultCodes.WrongOrAlreadyExistingCode:
        this._resultMessage = "Wrong code or code already exists";
        break;
      case CommandResultAnswer.ResultCodes.TelephoneCodeAlreadyExists:
        this._resultMessage = "Telephone code already exists";
        break;
      case CommandResultAnswer.ResultCodes.ChangedCodeIsTheSame:
        this._resultMessage = "Changed code is the same";
        break;
      case CommandResultAnswer.ResultCodes.OtherError:
        this._resultMessage = "Other error";
        break;
      case CommandResultAnswer.ResultCodes.CannotArmButCanForceArm:
        this._resultMessage = "Cannot arm, but can use force arm";
        break;
      case CommandResultAnswer.ResultCodes.CannotArm:
        this._resultMessage = "Cannot arm";
        break;
      case CommandResultAnswer.ResultCodes.CommandAccepted:
        this._resultMessage = "Command accepted";
        break;
      default:
        this._resultMessage = "Unknown result code";
        break;
    }
    return true;
  }

  get resultCode() {
    return this._resultCode;
  }

  get resultMessage() {
    return this._resultMessage;
  }
}

CommandResultAnswer.ResultCodes = Object.freeze({
  OK: 0x00,
  UserCodeNotFound: 0x01,
  NoAccess: 0x02,
  UserDoesNotExist: 0x03,
  UserAlreadyExists: 0x04,
  WrongOrAlreadyExistingCode: 0x05,
  TelephoneCodeAlreadyExists: 0x06,
  ChangedCodeIsTheSame: 0x07,
  OtherError: 0x08,
  CannotArmButCanForceArm: 0x11,
  CannotArm: 0x12,
  CommandAccepted: 0xff,
});

function decodeMessage(frame) {

  let decodedFrame;

  if (frame instanceof Decoder) {
    decodedFrame = frame.frame();
  }
  else {
    const decoder = new Decoder();
    for (const b of frame.values()) {
      if (decoder.addByte(b)) {
        decodedFrame = decoder.frame();
        break;
      }
    }
  }

  if (!decodedFrame || decodedFrame.length < 3) {
    return null;
  }

  const crc = new Crc();
  crc.addBytes(decodedFrame.subarray(0, decodedFrame.length - 2));

  if (
    crc.crc !=
    ((decodedFrame[decodedFrame.length - 2] << 8) |
      decodedFrame[decodedFrame.length - 1])
  ) {
    return null;
  }

  let message;
  switch (decodedFrame[0]) {
    case message_impl.Commands.ZonesViolation:
      message = new ZonesViolationAnswer();
      break;
    case message_impl.Commands.ZonesTamper:
      message = new ZonesTamperAnswer();
      break;
    case message_impl.Commands.OutputsState:
      message = new OutputsStateAnswer();
      break;
    case message_impl.Commands.NewData:
      message = new NewDataAnswer();
      break;
    case message_impl.Commands.CommandResult:
      message = new CommandResultAnswer();
      break;
    case message_impl.Commands.ZonesAlarm:
      message = new ZonesAlarmAnswer();
      break;
    case message_impl.Commands.ZonesTamperAlarm:
      message = new ZonesTamperAlarmAnswer();
      break;
    case message_impl.Commands.ZonesAlarmMemory:
      message = new ZonesAlarmMemoryAnswer();
      break;
    case message_impl.Commands.ZonesTamperAlarmMemory:
      message = new ZonesTamperAlarmMemoryAnswer();
      break;
    case message_impl.Commands.ZonesBypassStatus:
      message = new ZonesBypassStatusAnswer();
      break;
    case message_impl.Commands.ZonesNoViolationTrouble:
      message = new ZonesNoViolationTroubleAnswer();
      break;
    case message_impl.Commands.ZonesLongViolationTrouble:
      message = new ZonesLongViolationTroubleAnswer();
      break;
    case message_impl.Commands.ArmedPartitionsSuppressed:
      message = new ArmedPartitionsSuppressedAnswer();
      break;
    case message_impl.Commands.ArmedPartitionsReally:
      message = new ArmedPartitionsReallyAnswer();
      break;
    case message_impl.Commands.PartitionsArmedInMode2:
      message = new PartitionsArmedInMode2Answer();
      break;
    case message_impl.Commands.PartitionsArmedInMode3:
      message = new PartitionsArmedInMode3Answer();
      break;
    case message_impl.Commands.PartitionsWith1stCodeEntered:
      message = new PartitionsWith1stCodeEnteredAnswer();
      break;
    case message_impl.Commands.PartitionsEntryTime:
      message = new PartitionsEntryTimeAnswer();
      break;
    case message_impl.Commands.PartitionsExitTimeMoreThen10s:
      message = new PartitionsExitTimeMoreThen10sAnswer();
      break;
    case message_impl.Commands.PartitionsExitTimeLessThen10s:
      message = new PartitionsExitTimeLessThen10sAnswer();
      break;
    case message_impl.Commands.PartitionsTemporaryBlocked:
      message = new PartitionsTemporaryBlockedAnswer();
      break;
    case message_impl.Commands.PartitionsBlockedForGuardRound:
      message = new PartitionsBlockedForGuardRoundAnswer();
      break;
    case message_impl.Commands.PartitionsAlarm:
      message = new PartitionsAlarmAnswer();
      break;
    case message_impl.Commands.PartitionsFireAlarm:
      message = new PartitionsFireAlarmAnswer();
      break;
    case message_impl.Commands.PartitionsAlarmMemory:
      message = new PartitionsAlarmMemoryAnswer();
      break;
    case message_impl.Commands.PartitionsFireAlarmMemory:
      message = new PartitionsFireAlarmMemoryAnswer();
      break;
    case message_impl.Commands.ZonesIsolateState:
      message = new ZonesIsolateStateAnswer();
      break;
    case message_impl.Commands.ZonesMasked:
      message = new ZonesMaskedAnswer();
      break;
    case message_impl.Commands.ZonesMaskedMemory:
      message = new ZonesMaskedMemoryAnswer();
      break;
    case message_impl.Commands.ReadDeviceName:
      message = new ReadDeviceNameAnswer();
      break;
    default:
      return null;
  }

  if (message.decode(decodedFrame.subarray(1, decodedFrame.length - 2))) {
    return message;
  }

  return null;
}

module.exports = {
  DeviceType,
  decodeMessage,
  encodeArmedPartitionsReallyCommand,
  encodeArmedPartitionsSuppressedCommand,
  encodeArmInMode0Command,
  encodeArmInMode1Command,
  encodeArmInMode2Command,
  encodeArmInMode3Command,
  encodeClearAlarmCommand,
  encodeDisarmCommand,
  encodeForceArmInMode0Command,
  encodeForceArmInMode1Command,
  encodeForceArmInMode2Command,
  encodeForceArmInMode3Command,
  encodeNewDataCommand,
  encodeOutputsOffCommand,
  encodeOutputsOnCommand,
  encodeOutputsStateCommand,
  encodeOutputsState256Command,
  encodeOutputsSwitchCommand,
  encodePartitionsAlarmCommand,
  encodePartitionsAlarmMemoryCommand,
  encodePartitionsArmedInMode2Command,
  encodePartitionsArmedInMode3Command,
  encodePartitionsBlockedForGuardRoundCommand,
  encodePartitionsEntryTimeCommand,
  encodePartitionsExitTimeLessThen10sCommand,
  encodePartitionsExitTimeMoreThen10sCommand,
  encodePartitionsFireAlarmCommand,
  encodePartitionsFireAlarmMemoryCommand,
  encodePartitionsTemporaryBlockedCommand,
  encodePartitionsWith1stCodeEnteredCommand,
  encodeZonesAlarmCommand,
  encodeZonesAlarm256Command,
  encodeZonesAlarmMemoryCommand,
  encodeZonesAlarmMemory256Command,
  encodeZonesBypassCommand,
  encodeZonesBypassStatusCommand,
  encodeZonesBypassStatus256Command,
  encodeZonesIsolateCommand,
  encodeZonesIsolateStateCommand,
  encodeZonesIsolateState256Command,
  encodeZonesLongViolationTroubleCommand,
  encodeZonesLongViolationTrouble256Command,
  encodeZonesMaskedCommand,
  encodeZonesMasked256Command,
  encodeZonesMaskedMemoryCommand,
  encodeZonesMaskedMemory256Command,
  encodeZonesNoViolationTroubleCommand,
  encodeZonesNoViolationTrouble256Command,
  encodeZonesTamperAlarmCommand,
  encodeZonesTamperAlarm256Command,
  encodeZonesTamperAlarmMemoryCommand,
  encodeZonesTamperAlarmMemory256Command,
  encodeZonesTamperCommand,
  encodeZonesTamper256Command,
  encodeZonesUnbypassCommand,
  encodeZonesViolationCommand,
  encodeZonesViolation256Command,
  encodeReadDeviceName,
  ArmedPartitionsReallyAnswer,
  ArmedPartitionsSuppressedAnswer,
  CommandResultAnswer,
  NewDataAnswer,
  OutputsStateAnswer,
  PartitionsAlarmAnswer,
  PartitionsAlarmMemoryAnswer,
  PartitionsArmedInMode2Answer,
  PartitionsArmedInMode3Answer,
  PartitionsBlockedForGuardRoundAnswer,
  PartitionsEntryTimeAnswer,
  PartitionsExitTimeLessThen10sAnswer,
  PartitionsExitTimeMoreThen10sAnswer,
  PartitionsFireAlarmAnswer,
  PartitionsFireAlarmMemoryAnswer,
  PartitionsTemporaryBlockedAnswer,
  PartitionsWith1stCodeEnteredAnswer,
  ZonesAlarmAnswer,
  ZonesAlarmMemoryAnswer,
  ZonesBypassStatusAnswer,
  ZonesIsolateStateAnswer,
  ZonesLongViolationTroubleAnswer,
  ZonesMaskedAnswer,
  ZonesMaskedMemoryAnswer,
  ZonesNoViolationTroubleAnswer,
  ZonesTamperAlarmAnswer,
  ZonesTamperAlarmMemoryAnswer,
  ZonesTamperAnswer,
  ZonesViolationAnswer,
  ReadDeviceNameAnswer,
};
