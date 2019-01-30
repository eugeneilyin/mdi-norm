import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNetworkWifi } from './FilledNetworkWifi'
import { OutlineNetworkWifi } from './OutlineNetworkWifi'
import { RoundNetworkWifi } from './RoundNetworkWifi'
import { SharpNetworkWifi } from './SharpNetworkWifi'
import { TwoToneNetworkWifi } from './TwoToneNetworkWifi'

export const NetworkWifi = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNetworkWifi, OutlineNetworkWifi, RoundNetworkWifi, SharpNetworkWifi, TwoToneNetworkWifi)
