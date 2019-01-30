import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGamepad } from './FilledGamepad';
import { OutlineGamepad } from './OutlineGamepad';
import { RoundGamepad } from './RoundGamepad';
import { SharpGamepad } from './SharpGamepad';
import { TwoToneGamepad } from './TwoToneGamepad';
export var Gamepad =
/*#__PURE__*/
function Gamepad(props) {
  return createThemedIcon(props, FilledGamepad, OutlineGamepad, RoundGamepad, SharpGamepad, TwoToneGamepad);
};