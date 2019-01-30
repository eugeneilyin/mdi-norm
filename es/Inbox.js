import { createThemedIcon } from './utils/createThemedIcon';
import { FilledInbox } from './FilledInbox';
import { OutlineInbox } from './OutlineInbox';
import { RoundInbox } from './RoundInbox';
import { SharpInbox } from './SharpInbox';
import { TwoToneInbox } from './TwoToneInbox';
export var Inbox =
/*#__PURE__*/
function Inbox(props) {
  return createThemedIcon(props, FilledInbox, OutlineInbox, RoundInbox, SharpInbox, TwoToneInbox);
};