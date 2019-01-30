import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWatchLater } from './FilledWatchLater'
import { OutlineWatchLater } from './OutlineWatchLater'
import { RoundWatchLater } from './RoundWatchLater'
import { SharpWatchLater } from './SharpWatchLater'
import { TwoToneWatchLater } from './TwoToneWatchLater'

export const WatchLater = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWatchLater, OutlineWatchLater, RoundWatchLater, SharpWatchLater, TwoToneWatchLater)
