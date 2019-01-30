import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCropRotate } from './FilledCropRotate';
import { OutlineCropRotate } from './OutlineCropRotate';
import { RoundCropRotate } from './RoundCropRotate';
import { SharpCropRotate } from './SharpCropRotate';
import { TwoToneCropRotate } from './TwoToneCropRotate';
export var CropRotate =
/*#__PURE__*/
function CropRotate(props) {
  return createThemedIcon(props, FilledCropRotate, OutlineCropRotate, RoundCropRotate, SharpCropRotate, TwoToneCropRotate);
};