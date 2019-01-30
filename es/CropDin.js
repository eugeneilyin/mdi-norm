import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCropDin } from './FilledCropDin';
import { OutlineCropDin } from './OutlineCropDin';
import { RoundCropDin } from './RoundCropDin';
import { SharpCropDin } from './SharpCropDin';
import { TwoToneCropDin } from './TwoToneCropDin';
export var CropDin =
/*#__PURE__*/
function CropDin(props) {
  return createThemedIcon(props, FilledCropDin, OutlineCropDin, RoundCropDin, SharpCropDin, TwoToneCropDin);
};