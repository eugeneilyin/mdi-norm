import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSignalWifi2BarLock } from './FilledSignalWifi2BarLock'
import { OutlineSignalWifi2BarLock } from './OutlineSignalWifi2BarLock'
import { RoundSignalWifi2BarLock } from './RoundSignalWifi2BarLock'
import { SharpSignalWifi2BarLock } from './SharpSignalWifi2BarLock'
import { TwoToneSignalWifi2BarLock } from './TwoToneSignalWifi2BarLock'

export const SignalWifi2BarLock = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSignalWifi2BarLock, OutlineSignalWifi2BarLock, RoundSignalWifi2BarLock, SharpSignalWifi2BarLock, TwoToneSignalWifi2BarLock)
