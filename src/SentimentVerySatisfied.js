import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSentimentVerySatisfied } from './FilledSentimentVerySatisfied'
import { OutlineSentimentVerySatisfied } from './OutlineSentimentVerySatisfied'
import { RoundSentimentVerySatisfied } from './RoundSentimentVerySatisfied'
import { SharpSentimentVerySatisfied } from './SharpSentimentVerySatisfied'
import { TwoToneSentimentVerySatisfied } from './TwoToneSentimentVerySatisfied'

export const SentimentVerySatisfied = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSentimentVerySatisfied, OutlineSentimentVerySatisfied, RoundSentimentVerySatisfied, SharpSentimentVerySatisfied, TwoToneSentimentVerySatisfied)
