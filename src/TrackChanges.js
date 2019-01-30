import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTrackChanges } from './FilledTrackChanges'
import { OutlineTrackChanges } from './OutlineTrackChanges'
import { RoundTrackChanges } from './RoundTrackChanges'
import { SharpTrackChanges } from './SharpTrackChanges'
import { TwoToneTrackChanges } from './TwoToneTrackChanges'

export const TrackChanges = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTrackChanges, OutlineTrackChanges, RoundTrackChanges, SharpTrackChanges, TwoToneTrackChanges)
