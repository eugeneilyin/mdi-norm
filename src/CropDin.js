import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCropDin } from './FilledCropDin'
import { OutlineCropDin } from './OutlineCropDin'
import { RoundCropDin } from './RoundCropDin'
import { SharpCropDin } from './SharpCropDin'
import { TwoToneCropDin } from './TwoToneCropDin'

export const CropDin = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCropDin, OutlineCropDin, RoundCropDin, SharpCropDin, TwoToneCropDin)
