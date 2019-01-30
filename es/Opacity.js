import { createThemedIcon } from './utils/createThemedIcon';
import { FilledOpacity } from './FilledOpacity';
import { OutlineOpacity } from './OutlineOpacity';
import { RoundOpacity } from './RoundOpacity';
import { SharpOpacity } from './SharpOpacity';
import { TwoToneOpacity } from './TwoToneOpacity';
export var Opacity =
/*#__PURE__*/
function Opacity(props) {
  return createThemedIcon(props, FilledOpacity, OutlineOpacity, RoundOpacity, SharpOpacity, TwoToneOpacity);
};