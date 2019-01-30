import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBrokenImage } from './FilledBrokenImage'
import { OutlineBrokenImage } from './OutlineBrokenImage'
import { RoundBrokenImage } from './RoundBrokenImage'
import { SharpBrokenImage } from './SharpBrokenImage'
import { TwoToneBrokenImage } from './TwoToneBrokenImage'

export const BrokenImage = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBrokenImage, OutlineBrokenImage, RoundBrokenImage, SharpBrokenImage, TwoToneBrokenImage)
