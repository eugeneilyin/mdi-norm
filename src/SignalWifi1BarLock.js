import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalWifi1BarLock } from './FilledSignalWifi1BarLock'
import { OutlineSignalWifi1BarLock } from './OutlineSignalWifi1BarLock'
import { RoundSignalWifi1BarLock } from './RoundSignalWifi1BarLock'
import { SharpSignalWifi1BarLock } from './SharpSignalWifi1BarLock'
import { TwoToneSignalWifi1BarLock } from './TwoToneSignalWifi1BarLock'

export const SignalWifi1BarLock = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalWifi1BarLock, OutlineSignalWifi1BarLock, RoundSignalWifi1BarLock, SharpSignalWifi1BarLock, TwoToneSignalWifi1BarLock)
