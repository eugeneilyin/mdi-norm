import { createThemedIcon } from './utils/createThemedIcon';
import { FilledKeyboardVoice } from './FilledKeyboardVoice';
import { OutlineKeyboardVoice } from './OutlineKeyboardVoice';
import { RoundKeyboardVoice } from './RoundKeyboardVoice';
import { SharpKeyboardVoice } from './SharpKeyboardVoice';
import { TwoToneKeyboardVoice } from './TwoToneKeyboardVoice';
export var KeyboardVoice =
/*#__PURE__*/
function KeyboardVoice(props) {
  return createThemedIcon(props, FilledKeyboardVoice, OutlineKeyboardVoice, RoundKeyboardVoice, SharpKeyboardVoice, TwoToneKeyboardVoice);
};