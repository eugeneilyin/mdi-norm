import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsEthernet } from './FilledSettingsEthernet'
import { OutlineSettingsEthernet } from './OutlineSettingsEthernet'
import { RoundSettingsEthernet } from './RoundSettingsEthernet'
import { SharpSettingsEthernet } from './SharpSettingsEthernet'
import { TwoToneSettingsEthernet } from './TwoToneSettingsEthernet'

export const SettingsEthernet = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsEthernet, OutlineSettingsEthernet, RoundSettingsEthernet, SharpSettingsEthernet, TwoToneSettingsEthernet)
