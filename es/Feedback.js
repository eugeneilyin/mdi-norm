import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFeedback } from './FilledFeedback';
import { OutlineFeedback } from './OutlineFeedback';
import { RoundFeedback } from './RoundFeedback';
import { SharpFeedback } from './SharpFeedback';
import { TwoToneFeedback } from './TwoToneFeedback';
export var Feedback =
/*#__PURE__*/
function Feedback(props) {
  return createThemedIcon(props, FilledFeedback, OutlineFeedback, RoundFeedback, SharpFeedback, TwoToneFeedback);
};