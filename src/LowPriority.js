import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLowPriority } from './FilledLowPriority'
import { OutlineLowPriority } from './OutlineLowPriority'
import { RoundLowPriority } from './RoundLowPriority'
import { SharpLowPriority } from './SharpLowPriority'
import { TwoToneLowPriority } from './TwoToneLowPriority'

export const LowPriority = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLowPriority, OutlineLowPriority, RoundLowPriority, SharpLowPriority, TwoToneLowPriority)
