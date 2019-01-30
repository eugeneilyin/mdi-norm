import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDeviceHub } from './FilledDeviceHub';
import { OutlineDeviceHub } from './OutlineDeviceHub';
import { RoundDeviceHub } from './RoundDeviceHub';
import { SharpDeviceHub } from './SharpDeviceHub';
import { TwoToneDeviceHub } from './TwoToneDeviceHub';
export var DeviceHub =
/*#__PURE__*/
function DeviceHub(props) {
  return createThemedIcon(props, FilledDeviceHub, OutlineDeviceHub, RoundDeviceHub, SharpDeviceHub, TwoToneDeviceHub);
};