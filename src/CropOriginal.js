import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCropOriginal } from './FilledCropOriginal'
import { OutlineCropOriginal } from './OutlineCropOriginal'
import { RoundCropOriginal } from './RoundCropOriginal'
import { SharpCropOriginal } from './SharpCropOriginal'
import { TwoToneCropOriginal } from './TwoToneCropOriginal'

export const CropOriginal = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCropOriginal, OutlineCropOriginal, RoundCropOriginal, SharpCropOriginal, TwoToneCropOriginal)
