import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSentimentSatisfied } from './FilledSentimentSatisfied';
import { OutlineSentimentSatisfied } from './OutlineSentimentSatisfied';
import { RoundSentimentSatisfied } from './RoundSentimentSatisfied';
import { SharpSentimentSatisfied } from './SharpSentimentSatisfied';
import { TwoToneSentimentSatisfied } from './TwoToneSentimentSatisfied';
export var SentimentSatisfied =
/*#__PURE__*/
function SentimentSatisfied(props) {
  return createThemedIcon(props, FilledSentimentSatisfied, OutlineSentimentSatisfied, RoundSentimentSatisfied, SharpSentimentSatisfied, TwoToneSentimentSatisfied);
};