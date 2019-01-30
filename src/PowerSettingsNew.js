import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPowerSettingsNew } from './FilledPowerSettingsNew'
import { OutlinePowerSettingsNew } from './OutlinePowerSettingsNew'
import { RoundPowerSettingsNew } from './RoundPowerSettingsNew'
import { SharpPowerSettingsNew } from './SharpPowerSettingsNew'
import { TwoTonePowerSettingsNew } from './TwoTonePowerSettingsNew'

export const PowerSettingsNew = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPowerSettingsNew, OutlinePowerSettingsNew, RoundPowerSettingsNew, SharpPowerSettingsNew, TwoTonePowerSettingsNew)
