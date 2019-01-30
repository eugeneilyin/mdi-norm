import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsRemote } from './FilledSettingsRemote'
import { OutlineSettingsRemote } from './OutlineSettingsRemote'
import { RoundSettingsRemote } from './RoundSettingsRemote'
import { SharpSettingsRemote } from './SharpSettingsRemote'
import { TwoToneSettingsRemote } from './TwoToneSettingsRemote'

export const SettingsRemote = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsRemote, OutlineSettingsRemote, RoundSettingsRemote, SharpSettingsRemote, TwoToneSettingsRemote)
