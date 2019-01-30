import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSentimentSatisfiedAlt } from './FilledSentimentSatisfiedAlt'
import { OutlineSentimentSatisfiedAlt } from './OutlineSentimentSatisfiedAlt'
import { RoundSentimentSatisfiedAlt } from './RoundSentimentSatisfiedAlt'
import { SharpSentimentSatisfiedAlt } from './SharpSentimentSatisfiedAlt'
import { TwoToneSentimentSatisfiedAlt } from './TwoToneSentimentSatisfiedAlt'

export const SentimentSatisfiedAlt = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSentimentSatisfiedAlt, OutlineSentimentSatisfiedAlt, RoundSentimentSatisfiedAlt, SharpSentimentSatisfiedAlt, TwoToneSentimentSatisfiedAlt)
