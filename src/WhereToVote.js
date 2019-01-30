import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWhereToVote } from './FilledWhereToVote'
import { OutlineWhereToVote } from './OutlineWhereToVote'
import { RoundWhereToVote } from './RoundWhereToVote'
import { SharpWhereToVote } from './SharpWhereToVote'
import { TwoToneWhereToVote } from './TwoToneWhereToVote'

export const WhereToVote = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWhereToVote, OutlineWhereToVote, RoundWhereToVote, SharpWhereToVote, TwoToneWhereToVote)
