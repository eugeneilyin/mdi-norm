import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPause } from './FilledPause'
import { OutlinePause } from './OutlinePause'
import { RoundPause } from './RoundPause'
import { SharpPause } from './SharpPause'
import { TwoTonePause } from './TwoTonePause'

export const Pause = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPause, OutlinePause, RoundPause, SharpPause, TwoTonePause)
