import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHowToVote } from './FilledHowToVote'
import { OutlineHowToVote } from './OutlineHowToVote'
import { RoundHowToVote } from './RoundHowToVote'
import { SharpHowToVote } from './SharpHowToVote'
import { TwoToneHowToVote } from './TwoToneHowToVote'

export const HowToVote = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHowToVote, OutlineHowToVote, RoundHowToVote, SharpHowToVote, TwoToneHowToVote)
