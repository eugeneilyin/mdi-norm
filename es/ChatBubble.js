import { createThemedIcon } from './utils/createThemedIcon';
import { FilledChatBubble } from './FilledChatBubble';
import { OutlineChatBubble } from './OutlineChatBubble';
import { RoundChatBubble } from './RoundChatBubble';
import { SharpChatBubble } from './SharpChatBubble';
import { TwoToneChatBubble } from './TwoToneChatBubble';
export var ChatBubble =
/*#__PURE__*/
function ChatBubble(props) {
  return createThemedIcon(props, FilledChatBubble, OutlineChatBubble, RoundChatBubble, SharpChatBubble, TwoToneChatBubble);
};