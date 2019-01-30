import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalWifiOff } from './FilledSignalWifiOff'
import { OutlineSignalWifiOff } from './OutlineSignalWifiOff'
import { RoundSignalWifiOff } from './RoundSignalWifiOff'
import { SharpSignalWifiOff } from './SharpSignalWifiOff'
import { TwoToneSignalWifiOff } from './TwoToneSignalWifiOff'

export const SignalWifiOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalWifiOff, OutlineSignalWifiOff, RoundSignalWifiOff, SharpSignalWifiOff, TwoToneSignalWifiOff)
