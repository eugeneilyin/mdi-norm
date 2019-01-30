import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCameraRoll } from './FilledCameraRoll';
import { OutlineCameraRoll } from './OutlineCameraRoll';
import { RoundCameraRoll } from './RoundCameraRoll';
import { SharpCameraRoll } from './SharpCameraRoll';
import { TwoToneCameraRoll } from './TwoToneCameraRoll';
export var CameraRoll =
/*#__PURE__*/
function CameraRoll(props) {
  return createThemedIcon(props, FilledCameraRoll, OutlineCameraRoll, RoundCameraRoll, SharpCameraRoll, TwoToneCameraRoll);
};