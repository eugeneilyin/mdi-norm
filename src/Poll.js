import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPoll } from './FilledPoll'
import { OutlinePoll } from './OutlinePoll'
import { RoundPoll } from './RoundPoll'
import { SharpPoll } from './SharpPoll'
import { TwoTonePoll } from './TwoTonePoll'

export const Poll = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPoll, OutlinePoll, RoundPoll, SharpPoll, TwoTonePoll)
