import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSentimentDissatisfied } from './FilledSentimentDissatisfied';
import { OutlineSentimentDissatisfied } from './OutlineSentimentDissatisfied';
import { RoundSentimentDissatisfied } from './RoundSentimentDissatisfied';
import { SharpSentimentDissatisfied } from './SharpSentimentDissatisfied';
import { TwoToneSentimentDissatisfied } from './TwoToneSentimentDissatisfied';
export var SentimentDissatisfied =
/*#__PURE__*/
function SentimentDissatisfied(props) {
  return createThemedIcon(props, FilledSentimentDissatisfied, OutlineSentimentDissatisfied, RoundSentimentDissatisfied, SharpSentimentDissatisfied, TwoToneSentimentDissatisfied);
};