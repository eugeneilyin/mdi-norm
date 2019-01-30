import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCropSquare } from './FilledCropSquare'
import { OutlineCropSquare } from './OutlineCropSquare'
import { RoundCropSquare } from './RoundCropSquare'
import { SharpCropSquare } from './SharpCropSquare'
import { TwoToneCropSquare } from './TwoToneCropSquare'

export const CropSquare = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCropSquare, OutlineCropSquare, RoundCropSquare, SharpCropSquare, TwoToneCropSquare)
