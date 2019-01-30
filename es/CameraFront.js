import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCameraFront } from './FilledCameraFront';
import { OutlineCameraFront } from './OutlineCameraFront';
import { RoundCameraFront } from './RoundCameraFront';
import { SharpCameraFront } from './SharpCameraFront';
import { TwoToneCameraFront } from './TwoToneCameraFront';
export var CameraFront =
/*#__PURE__*/
function CameraFront(props) {
  return createThemedIcon(props, FilledCameraFront, OutlineCameraFront, RoundCameraFront, SharpCameraFront, TwoToneCameraFront);
};