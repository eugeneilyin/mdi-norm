import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsVoice } from './FilledSettingsVoice'
import { OutlineSettingsVoice } from './OutlineSettingsVoice'
import { RoundSettingsVoice } from './RoundSettingsVoice'
import { SharpSettingsVoice } from './SharpSettingsVoice'
import { TwoToneSettingsVoice } from './TwoToneSettingsVoice'

export const SettingsVoice = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsVoice, OutlineSettingsVoice, RoundSettingsVoice, SharpSettingsVoice, TwoToneSettingsVoice)
