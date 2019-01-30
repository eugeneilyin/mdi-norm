import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCardMembership } from './FilledCardMembership';
import { OutlineCardMembership } from './OutlineCardMembership';
import { RoundCardMembership } from './RoundCardMembership';
import { SharpCardMembership } from './SharpCardMembership';
import { TwoToneCardMembership } from './TwoToneCardMembership';
export var CardMembership =
/*#__PURE__*/
function CardMembership(props) {
  return createThemedIcon(props, FilledCardMembership, OutlineCardMembership, RoundCardMembership, SharpCardMembership, TwoToneCardMembership);
};