import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLockOpen } from './FilledLockOpen'
import { OutlineLockOpen } from './OutlineLockOpen'
import { RoundLockOpen } from './RoundLockOpen'
import { SharpLockOpen } from './SharpLockOpen'
import { TwoToneLockOpen } from './TwoToneLockOpen'

export const LockOpen = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLockOpen, OutlineLockOpen, RoundLockOpen, SharpLockOpen, TwoToneLockOpen)
