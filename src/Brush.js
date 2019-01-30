import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBrush } from './FilledBrush'
import { OutlineBrush } from './OutlineBrush'
import { RoundBrush } from './RoundBrush'
import { SharpBrush } from './SharpBrush'
import { TwoToneBrush } from './TwoToneBrush'

export const Brush = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBrush, OutlineBrush, RoundBrush, SharpBrush, TwoToneBrush)
