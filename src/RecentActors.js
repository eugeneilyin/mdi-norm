import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRecentActors } from './FilledRecentActors'
import { OutlineRecentActors } from './OutlineRecentActors'
import { RoundRecentActors } from './RoundRecentActors'
import { SharpRecentActors } from './SharpRecentActors'
import { TwoToneRecentActors } from './TwoToneRecentActors'

export const RecentActors = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRecentActors, OutlineRecentActors, RoundRecentActors, SharpRecentActors, TwoToneRecentActors)
