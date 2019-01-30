import { createThemedIcon } from './utils/createThemedIcon';
import { FilledKeyboardCapslock } from './FilledKeyboardCapslock';
import { OutlineKeyboardCapslock } from './OutlineKeyboardCapslock';
import { RoundKeyboardCapslock } from './RoundKeyboardCapslock';
import { SharpKeyboardCapslock } from './SharpKeyboardCapslock';
import { TwoToneKeyboardCapslock } from './TwoToneKeyboardCapslock';
export var KeyboardCapslock =
/*#__PURE__*/
function KeyboardCapslock(props) {
  return createThemedIcon(props, FilledKeyboardCapslock, OutlineKeyboardCapslock, RoundKeyboardCapslock, SharpKeyboardCapslock, TwoToneKeyboardCapslock);
};