import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMessage } from './FilledMessage';
import { OutlineMessage } from './OutlineMessage';
import { RoundMessage } from './RoundMessage';
import { SharpMessage } from './SharpMessage';
import { TwoToneMessage } from './TwoToneMessage';
export var Message =
/*#__PURE__*/
function Message(props) {
  return createThemedIcon(props, FilledMessage, OutlineMessage, RoundMessage, SharpMessage, TwoToneMessage);
};