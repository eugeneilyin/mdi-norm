import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsOverscan } from './FilledSettingsOverscan'
import { OutlineSettingsOverscan } from './OutlineSettingsOverscan'
import { RoundSettingsOverscan } from './RoundSettingsOverscan'
import { SharpSettingsOverscan } from './SharpSettingsOverscan'
import { TwoToneSettingsOverscan } from './TwoToneSettingsOverscan'

export const SettingsOverscan = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsOverscan, OutlineSettingsOverscan, RoundSettingsOverscan, SharpSettingsOverscan, TwoToneSettingsOverscan)
