import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWifiTethering } from './FilledWifiTethering'
import { OutlineWifiTethering } from './OutlineWifiTethering'
import { RoundWifiTethering } from './RoundWifiTethering'
import { SharpWifiTethering } from './SharpWifiTethering'
import { TwoToneWifiTethering } from './TwoToneWifiTethering'

export const WifiTethering = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWifiTethering, OutlineWifiTethering, RoundWifiTethering, SharpWifiTethering, TwoToneWifiTethering)
