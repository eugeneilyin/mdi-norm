import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCropLandscape } from './FilledCropLandscape'
import { OutlineCropLandscape } from './OutlineCropLandscape'
import { RoundCropLandscape } from './RoundCropLandscape'
import { SharpCropLandscape } from './SharpCropLandscape'
import { TwoToneCropLandscape } from './TwoToneCropLandscape'

export const CropLandscape = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCropLandscape, OutlineCropLandscape, RoundCropLandscape, SharpCropLandscape, TwoToneCropLandscape)
