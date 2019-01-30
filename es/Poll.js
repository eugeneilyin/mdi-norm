import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPoll } from './FilledPoll';
import { OutlinePoll } from './OutlinePoll';
import { RoundPoll } from './RoundPoll';
import { SharpPoll } from './SharpPoll';
import { TwoTonePoll } from './TwoTonePoll';
export var Poll =
/*#__PURE__*/
function Poll(props) {
  return createThemedIcon(props, FilledPoll, OutlinePoll, RoundPoll, SharpPoll, TwoTonePoll);
};