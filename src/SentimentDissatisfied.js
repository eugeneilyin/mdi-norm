import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSentimentDissatisfied } from './FilledSentimentDissatisfied'
import { OutlineSentimentDissatisfied } from './OutlineSentimentDissatisfied'
import { RoundSentimentDissatisfied } from './RoundSentimentDissatisfied'
import { SharpSentimentDissatisfied } from './SharpSentimentDissatisfied'
import { TwoToneSentimentDissatisfied } from './TwoToneSentimentDissatisfied'

export const SentimentDissatisfied = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSentimentDissatisfied, OutlineSentimentDissatisfied, RoundSentimentDissatisfied, SharpSentimentDissatisfied, TwoToneSentimentDissatisfied)
