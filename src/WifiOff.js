import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWifiOff } from './FilledWifiOff'
import { OutlineWifiOff } from './OutlineWifiOff'
import { RoundWifiOff } from './RoundWifiOff'
import { SharpWifiOff } from './SharpWifiOff'
import { TwoToneWifiOff } from './TwoToneWifiOff'

export const WifiOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWifiOff, OutlineWifiOff, RoundWifiOff, SharpWifiOff, TwoToneWifiOff)
