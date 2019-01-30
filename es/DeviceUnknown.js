import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDeviceUnknown } from './FilledDeviceUnknown';
import { OutlineDeviceUnknown } from './OutlineDeviceUnknown';
import { RoundDeviceUnknown } from './RoundDeviceUnknown';
import { SharpDeviceUnknown } from './SharpDeviceUnknown';
import { TwoToneDeviceUnknown } from './TwoToneDeviceUnknown';
export var DeviceUnknown =
/*#__PURE__*/
function DeviceUnknown(props) {
  return createThemedIcon(props, FilledDeviceUnknown, OutlineDeviceUnknown, RoundDeviceUnknown, SharpDeviceUnknown, TwoToneDeviceUnknown);
};