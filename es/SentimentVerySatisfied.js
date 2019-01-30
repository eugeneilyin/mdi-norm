import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSentimentVerySatisfied } from './FilledSentimentVerySatisfied';
import { OutlineSentimentVerySatisfied } from './OutlineSentimentVerySatisfied';
import { RoundSentimentVerySatisfied } from './RoundSentimentVerySatisfied';
import { SharpSentimentVerySatisfied } from './SharpSentimentVerySatisfied';
import { TwoToneSentimentVerySatisfied } from './TwoToneSentimentVerySatisfied';
export var SentimentVerySatisfied =
/*#__PURE__*/
function SentimentVerySatisfied(props) {
  return createThemedIcon(props, FilledSentimentVerySatisfied, OutlineSentimentVerySatisfied, RoundSentimentVerySatisfied, SharpSentimentVerySatisfied, TwoToneSentimentVerySatisfied);
};