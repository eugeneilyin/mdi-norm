import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCameraEnhance } from './FilledCameraEnhance';
import { OutlineCameraEnhance } from './OutlineCameraEnhance';
import { RoundCameraEnhance } from './RoundCameraEnhance';
import { SharpCameraEnhance } from './SharpCameraEnhance';
import { TwoToneCameraEnhance } from './TwoToneCameraEnhance';
export var CameraEnhance =
/*#__PURE__*/
function CameraEnhance(props) {
  return createThemedIcon(props, FilledCameraEnhance, OutlineCameraEnhance, RoundCameraEnhance, SharpCameraEnhance, TwoToneCameraEnhance);
};