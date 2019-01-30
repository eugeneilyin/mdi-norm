import { createThemedIcon } from './utils/createThemedIcon';
import { FilledShutterSpeed } from './FilledShutterSpeed';
import { OutlineShutterSpeed } from './OutlineShutterSpeed';
import { RoundShutterSpeed } from './RoundShutterSpeed';
import { SharpShutterSpeed } from './SharpShutterSpeed';
import { TwoToneShutterSpeed } from './TwoToneShutterSpeed';
export var ShutterSpeed =
/*#__PURE__*/
function ShutterSpeed(props) {
  return createThemedIcon(props, FilledShutterSpeed, OutlineShutterSpeed, RoundShutterSpeed, SharpShutterSpeed, TwoToneShutterSpeed);
};