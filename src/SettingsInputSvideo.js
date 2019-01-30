import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsInputSvideo } from './FilledSettingsInputSvideo'
import { OutlineSettingsInputSvideo } from './OutlineSettingsInputSvideo'
import { RoundSettingsInputSvideo } from './RoundSettingsInputSvideo'
import { SharpSettingsInputSvideo } from './SharpSettingsInputSvideo'
import { TwoToneSettingsInputSvideo } from './TwoToneSettingsInputSvideo'

export const SettingsInputSvideo = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsInputSvideo, OutlineSettingsInputSvideo, RoundSettingsInputSvideo, SharpSettingsInputSvideo, TwoToneSettingsInputSvideo)
