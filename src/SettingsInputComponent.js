import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsInputComponent } from './FilledSettingsInputComponent'
import { OutlineSettingsInputComponent } from './OutlineSettingsInputComponent'
import { RoundSettingsInputComponent } from './RoundSettingsInputComponent'
import { SharpSettingsInputComponent } from './SharpSettingsInputComponent'
import { TwoToneSettingsInputComponent } from './TwoToneSettingsInputComponent'

export const SettingsInputComponent = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsInputComponent, OutlineSettingsInputComponent, RoundSettingsInputComponent, SharpSettingsInputComponent, TwoToneSettingsInputComponent)
