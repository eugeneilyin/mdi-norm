import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCrop } from './FilledCrop'
import { OutlineCrop } from './OutlineCrop'
import { RoundCrop } from './RoundCrop'
import { SharpCrop } from './SharpCrop'
import { TwoToneCrop } from './TwoToneCrop'

export const Crop = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCrop, OutlineCrop, RoundCrop, SharpCrop, TwoToneCrop)
