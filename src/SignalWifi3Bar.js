import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalWifi3Bar } from './FilledSignalWifi3Bar'
import { OutlineSignalWifi3Bar } from './OutlineSignalWifi3Bar'
import { RoundSignalWifi3Bar } from './RoundSignalWifi3Bar'
import { SharpSignalWifi3Bar } from './SharpSignalWifi3Bar'
import { TwoToneSignalWifi3Bar } from './TwoToneSignalWifi3Bar'

export const SignalWifi3Bar = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalWifi3Bar, OutlineSignalWifi3Bar, RoundSignalWifi3Bar, SharpSignalWifi3Bar, TwoToneSignalWifi3Bar)
