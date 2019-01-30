import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBrandingWatermark } from './FilledBrandingWatermark';
import { OutlineBrandingWatermark } from './OutlineBrandingWatermark';
import { RoundBrandingWatermark } from './RoundBrandingWatermark';
import { SharpBrandingWatermark } from './SharpBrandingWatermark';
import { TwoToneBrandingWatermark } from './TwoToneBrandingWatermark';
export var BrandingWatermark =
/*#__PURE__*/
function BrandingWatermark(props) {
  return createThemedIcon(props, FilledBrandingWatermark, OutlineBrandingWatermark, RoundBrandingWatermark, SharpBrandingWatermark, TwoToneBrandingWatermark);
};