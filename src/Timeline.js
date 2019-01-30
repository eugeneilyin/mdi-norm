import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTimeline } from './FilledTimeline'
import { OutlineTimeline } from './OutlineTimeline'
import { RoundTimeline } from './RoundTimeline'
import { SharpTimeline } from './SharpTimeline'
import { TwoToneTimeline } from './TwoToneTimeline'

export const Timeline = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTimeline, OutlineTimeline, RoundTimeline, SharpTimeline, TwoToneTimeline)
