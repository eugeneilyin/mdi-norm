import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBurstMode } from './FilledBurstMode'
import { OutlineBurstMode } from './OutlineBurstMode'
import { RoundBurstMode } from './RoundBurstMode'
import { SharpBurstMode } from './SharpBurstMode'
import { TwoToneBurstMode } from './TwoToneBurstMode'

export const BurstMode = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBurstMode, OutlineBurstMode, RoundBurstMode, SharpBurstMode, TwoToneBurstMode)
