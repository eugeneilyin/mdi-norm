import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalWifi3BarLock } from './FilledSignalWifi3BarLock'
import { OutlineSignalWifi3BarLock } from './OutlineSignalWifi3BarLock'
import { RoundSignalWifi3BarLock } from './RoundSignalWifi3BarLock'
import { SharpSignalWifi3BarLock } from './SharpSignalWifi3BarLock'
import { TwoToneSignalWifi3BarLock } from './TwoToneSignalWifi3BarLock'

export const SignalWifi3BarLock = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalWifi3BarLock, OutlineSignalWifi3BarLock, RoundSignalWifi3BarLock, SharpSignalWifi3BarLock, TwoToneSignalWifi3BarLock)
