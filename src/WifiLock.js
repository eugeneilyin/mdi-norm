import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWifiLock } from './FilledWifiLock'
import { OutlineWifiLock } from './OutlineWifiLock'
import { RoundWifiLock } from './RoundWifiLock'
import { SharpWifiLock } from './SharpWifiLock'
import { TwoToneWifiLock } from './TwoToneWifiLock'

export const WifiLock = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWifiLock, OutlineWifiLock, RoundWifiLock, SharpWifiLock, TwoToneWifiLock)
