import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCropLandscape } from './FilledCropLandscape';
import { OutlineCropLandscape } from './OutlineCropLandscape';
import { RoundCropLandscape } from './RoundCropLandscape';
import { SharpCropLandscape } from './SharpCropLandscape';
import { TwoToneCropLandscape } from './TwoToneCropLandscape';
export var CropLandscape =
/*#__PURE__*/
function CropLandscape(props) {
  return createThemedIcon(props, FilledCropLandscape, OutlineCropLandscape, RoundCropLandscape, SharpCropLandscape, TwoToneCropLandscape);
};