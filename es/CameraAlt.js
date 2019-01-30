import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCameraAlt } from './FilledCameraAlt';
import { OutlineCameraAlt } from './OutlineCameraAlt';
import { RoundCameraAlt } from './RoundCameraAlt';
import { SharpCameraAlt } from './SharpCameraAlt';
import { TwoToneCameraAlt } from './TwoToneCameraAlt';
export var CameraAlt =
/*#__PURE__*/
function CameraAlt(props) {
  return createThemedIcon(props, FilledCameraAlt, OutlineCameraAlt, RoundCameraAlt, SharpCameraAlt, TwoToneCameraAlt);
};