import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCropOriginal } from './FilledCropOriginal';
import { OutlineCropOriginal } from './OutlineCropOriginal';
import { RoundCropOriginal } from './RoundCropOriginal';
import { SharpCropOriginal } from './SharpCropOriginal';
import { TwoToneCropOriginal } from './TwoToneCropOriginal';
export var CropOriginal =
/*#__PURE__*/
function CropOriginal(props) {
  return createThemedIcon(props, FilledCropOriginal, OutlineCropOriginal, RoundCropOriginal, SharpCropOriginal, TwoToneCropOriginal);
};