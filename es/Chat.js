import { createThemedIcon } from './utils/createThemedIcon';
import { FilledChat } from './FilledChat';
import { OutlineChat } from './OutlineChat';
import { RoundChat } from './RoundChat';
import { SharpChat } from './SharpChat';
import { TwoToneChat } from './TwoToneChat';
export var Chat =
/*#__PURE__*/
function Chat(props) {
  return createThemedIcon(props, FilledChat, OutlineChat, RoundChat, SharpChat, TwoToneChat);
};