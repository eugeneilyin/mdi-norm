import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalFlorist } from './FilledLocalFlorist'
import { OutlineLocalFlorist } from './OutlineLocalFlorist'
import { RoundLocalFlorist } from './RoundLocalFlorist'
import { SharpLocalFlorist } from './SharpLocalFlorist'
import { TwoToneLocalFlorist } from './TwoToneLocalFlorist'

export const LocalFlorist = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalFlorist, OutlineLocalFlorist, RoundLocalFlorist, SharpLocalFlorist, TwoToneLocalFlorist)
