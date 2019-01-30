import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsApplications } from './FilledSettingsApplications'
import { OutlineSettingsApplications } from './OutlineSettingsApplications'
import { RoundSettingsApplications } from './RoundSettingsApplications'
import { SharpSettingsApplications } from './SharpSettingsApplications'
import { TwoToneSettingsApplications } from './TwoToneSettingsApplications'

export const SettingsApplications = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsApplications, OutlineSettingsApplications, RoundSettingsApplications, SharpSettingsApplications, TwoToneSettingsApplications)
