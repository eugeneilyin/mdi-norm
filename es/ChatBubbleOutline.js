import { createThemedIcon } from './utils/createThemedIcon';
import { FilledChatBubbleOutline } from './FilledChatBubbleOutline';
import { OutlineChatBubbleOutline } from './OutlineChatBubbleOutline';
import { RoundChatBubbleOutline } from './RoundChatBubbleOutline';
import { SharpChatBubbleOutline } from './SharpChatBubbleOutline';
import { TwoToneChatBubbleOutline } from './TwoToneChatBubbleOutline';
export var ChatBubbleOutline =
/*#__PURE__*/
function ChatBubbleOutline(props) {
  return createThemedIcon(props, FilledChatBubbleOutline, OutlineChatBubbleOutline, RoundChatBubbleOutline, SharpChatBubbleOutline, TwoToneChatBubbleOutline);
};