import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCropPortrait } from './FilledCropPortrait';
import { OutlineCropPortrait } from './OutlineCropPortrait';
import { RoundCropPortrait } from './RoundCropPortrait';
import { SharpCropPortrait } from './SharpCropPortrait';
import { TwoToneCropPortrait } from './TwoToneCropPortrait';
export var CropPortrait =
/*#__PURE__*/
function CropPortrait(props) {
  return createThemedIcon(props, FilledCropPortrait, OutlineCropPortrait, RoundCropPortrait, SharpCropPortrait, TwoToneCropPortrait);
};