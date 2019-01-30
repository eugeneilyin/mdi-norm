import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLock } from './FilledLock'
import { OutlineLock } from './OutlineLock'
import { RoundLock } from './RoundLock'
import { SharpLock } from './SharpLock'
import { TwoToneLock } from './TwoToneLock'

export const Lock = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLock, OutlineLock, RoundLock, SharpLock, TwoToneLock)
