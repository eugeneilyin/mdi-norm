import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalActivity } from './FilledLocalActivity'
import { OutlineLocalActivity } from './OutlineLocalActivity'
import { RoundLocalActivity } from './RoundLocalActivity'
import { SharpLocalActivity } from './SharpLocalActivity'
import { TwoToneLocalActivity } from './TwoToneLocalActivity'

export const LocalActivity = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalActivity, OutlineLocalActivity, RoundLocalActivity, SharpLocalActivity, TwoToneLocalActivity)
