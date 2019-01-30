import { createThemedIcon } from './utils/createThemedIcon';
import { FilledKeyboardReturn } from './FilledKeyboardReturn';
import { OutlineKeyboardReturn } from './OutlineKeyboardReturn';
import { RoundKeyboardReturn } from './RoundKeyboardReturn';
import { SharpKeyboardReturn } from './SharpKeyboardReturn';
import { TwoToneKeyboardReturn } from './TwoToneKeyboardReturn';
export var KeyboardReturn =
/*#__PURE__*/
function KeyboardReturn(props) {
  return createThemedIcon(props, FilledKeyboardReturn, OutlineKeyboardReturn, RoundKeyboardReturn, SharpKeyboardReturn, TwoToneKeyboardReturn);
};