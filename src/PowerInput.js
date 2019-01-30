import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPowerInput } from './FilledPowerInput'
import { OutlinePowerInput } from './OutlinePowerInput'
import { RoundPowerInput } from './RoundPowerInput'
import { SharpPowerInput } from './SharpPowerInput'
import { TwoTonePowerInput } from './TwoTonePowerInput'

export const PowerInput = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPowerInput, OutlinePowerInput, RoundPowerInput, SharpPowerInput, TwoTonePowerInput)
