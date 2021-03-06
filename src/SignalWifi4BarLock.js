import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalWifi4BarLock } from './FilledSignalWifi4BarLock'
import { OutlineSignalWifi4BarLock } from './OutlineSignalWifi4BarLock'
import { RoundSignalWifi4BarLock } from './RoundSignalWifi4BarLock'
import { SharpSignalWifi4BarLock } from './SharpSignalWifi4BarLock'
import { TwoToneSignalWifi4BarLock } from './TwoToneSignalWifi4BarLock'

export const SignalWifi4BarLock = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalWifi4BarLock, OutlineSignalWifi4BarLock, RoundSignalWifi4BarLock, SharpSignalWifi4BarLock, TwoToneSignalWifi4BarLock)
