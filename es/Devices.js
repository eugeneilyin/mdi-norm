import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDevices } from './FilledDevices';
import { OutlineDevices } from './OutlineDevices';
import { RoundDevices } from './RoundDevices';
import { SharpDevices } from './SharpDevices';
import { TwoToneDevices } from './TwoToneDevices';
export var Devices =
/*#__PURE__*/
function Devices(props) {
  return createThemedIcon(props, FilledDevices, OutlineDevices, RoundDevices, SharpDevices, TwoToneDevices);
};