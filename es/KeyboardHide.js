import { createThemedIcon } from './utils/createThemedIcon';
import { FilledKeyboardHide } from './FilledKeyboardHide';
import { OutlineKeyboardHide } from './OutlineKeyboardHide';
import { RoundKeyboardHide } from './RoundKeyboardHide';
import { SharpKeyboardHide } from './SharpKeyboardHide';
import { TwoToneKeyboardHide } from './TwoToneKeyboardHide';
export var KeyboardHide =
/*#__PURE__*/
function KeyboardHide(props) {
  return createThemedIcon(props, FilledKeyboardHide, OutlineKeyboardHide, RoundKeyboardHide, SharpKeyboardHide, TwoToneKeyboardHide);
};