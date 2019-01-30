import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPowerOff } from './FilledPowerOff'
import { OutlinePowerOff } from './OutlinePowerOff'
import { RoundPowerOff } from './RoundPowerOff'
import { SharpPowerOff } from './SharpPowerOff'
import { TwoTonePowerOff } from './TwoTonePowerOff'

export const PowerOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPowerOff, OutlinePowerOff, RoundPowerOff, SharpPowerOff, TwoTonePowerOff)
