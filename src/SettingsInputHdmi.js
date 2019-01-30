import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsInputHdmi } from './FilledSettingsInputHdmi'
import { OutlineSettingsInputHdmi } from './OutlineSettingsInputHdmi'
import { RoundSettingsInputHdmi } from './RoundSettingsInputHdmi'
import { SharpSettingsInputHdmi } from './SharpSettingsInputHdmi'
import { TwoToneSettingsInputHdmi } from './TwoToneSettingsInputHdmi'

export const SettingsInputHdmi = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsInputHdmi, OutlineSettingsInputHdmi, RoundSettingsInputHdmi, SharpSettingsInputHdmi, TwoToneSettingsInputHdmi)
