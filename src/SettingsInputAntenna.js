import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsInputAntenna } from './FilledSettingsInputAntenna'
import { OutlineSettingsInputAntenna } from './OutlineSettingsInputAntenna'
import { RoundSettingsInputAntenna } from './RoundSettingsInputAntenna'
import { SharpSettingsInputAntenna } from './SharpSettingsInputAntenna'
import { TwoToneSettingsInputAntenna } from './TwoToneSettingsInputAntenna'

export const SettingsInputAntenna = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsInputAntenna, OutlineSettingsInputAntenna, RoundSettingsInputAntenna, SharpSettingsInputAntenna, TwoToneSettingsInputAntenna)
