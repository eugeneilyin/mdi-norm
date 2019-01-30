import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalWifi4Bar } from './FilledSignalWifi4Bar'
import { OutlineSignalWifi4Bar } from './OutlineSignalWifi4Bar'
import { RoundSignalWifi4Bar } from './RoundSignalWifi4Bar'
import { SharpSignalWifi4Bar } from './SharpSignalWifi4Bar'
import { TwoToneSignalWifi4Bar } from './TwoToneSignalWifi4Bar'

export const SignalWifi4Bar = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalWifi4Bar, OutlineSignalWifi4Bar, RoundSignalWifi4Bar, SharpSignalWifi4Bar, TwoToneSignalWifi4Bar)
