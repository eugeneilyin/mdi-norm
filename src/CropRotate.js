import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCropRotate } from './FilledCropRotate'
import { OutlineCropRotate } from './OutlineCropRotate'
import { RoundCropRotate } from './RoundCropRotate'
import { SharpCropRotate } from './SharpCropRotate'
import { TwoToneCropRotate } from './TwoToneCropRotate'

export const CropRotate = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCropRotate, OutlineCropRotate, RoundCropRotate, SharpCropRotate, TwoToneCropRotate)
