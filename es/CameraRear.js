import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCameraRear } from './FilledCameraRear';
import { OutlineCameraRear } from './OutlineCameraRear';
import { RoundCameraRear } from './RoundCameraRear';
import { SharpCameraRear } from './SharpCameraRear';
import { TwoToneCameraRear } from './TwoToneCameraRear';
export var CameraRear =
/*#__PURE__*/
function CameraRear(props) {
  return createThemedIcon(props, FilledCameraRear, OutlineCameraRear, RoundCameraRear, SharpCameraRear, TwoToneCameraRear);
};