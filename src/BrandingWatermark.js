import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBrandingWatermark } from './FilledBrandingWatermark'
import { OutlineBrandingWatermark } from './OutlineBrandingWatermark'
import { RoundBrandingWatermark } from './RoundBrandingWatermark'
import { SharpBrandingWatermark } from './SharpBrandingWatermark'
import { TwoToneBrandingWatermark } from './TwoToneBrandingWatermark'

export const BrandingWatermark = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBrandingWatermark, OutlineBrandingWatermark, RoundBrandingWatermark, SharpBrandingWatermark, TwoToneBrandingWatermark)
