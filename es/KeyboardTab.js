import { createThemedIcon } from './utils/createThemedIcon';
import { FilledKeyboardTab } from './FilledKeyboardTab';
import { OutlineKeyboardTab } from './OutlineKeyboardTab';
import { RoundKeyboardTab } from './RoundKeyboardTab';
import { SharpKeyboardTab } from './SharpKeyboardTab';
import { TwoToneKeyboardTab } from './TwoToneKeyboardTab';
export var KeyboardTab =
/*#__PURE__*/
function KeyboardTab(props) {
  return createThemedIcon(props, FilledKeyboardTab, OutlineKeyboardTab, RoundKeyboardTab, SharpKeyboardTab, TwoToneKeyboardTab);
};