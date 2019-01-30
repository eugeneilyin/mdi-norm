import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsCell } from './FilledSettingsCell'
import { OutlineSettingsCell } from './OutlineSettingsCell'
import { RoundSettingsCell } from './RoundSettingsCell'
import { SharpSettingsCell } from './SharpSettingsCell'
import { TwoToneSettingsCell } from './TwoToneSettingsCell'

export const SettingsCell = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsCell, OutlineSettingsCell, RoundSettingsCell, SharpSettingsCell, TwoToneSettingsCell)
