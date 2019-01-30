import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSentimentVeryDissatisfied } from './FilledSentimentVeryDissatisfied'
import { OutlineSentimentVeryDissatisfied } from './OutlineSentimentVeryDissatisfied'
import { RoundSentimentVeryDissatisfied } from './RoundSentimentVeryDissatisfied'
import { SharpSentimentVeryDissatisfied } from './SharpSentimentVeryDissatisfied'
import { TwoToneSentimentVeryDissatisfied } from './TwoToneSentimentVeryDissatisfied'

export const SentimentVeryDissatisfied = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSentimentVeryDissatisfied, OutlineSentimentVeryDissatisfied, RoundSentimentVeryDissatisfied, SharpSentimentVeryDissatisfied, TwoToneSentimentVeryDissatisfied)
