import { createThemedIcon } from './utils/createThemedIcon';
import { FilledInvertColors } from './FilledInvertColors';
import { OutlineInvertColors } from './OutlineInvertColors';
import { RoundInvertColors } from './RoundInvertColors';
import { SharpInvertColors } from './SharpInvertColors';
import { TwoToneInvertColors } from './TwoToneInvertColors';
export var InvertColors =
/*#__PURE__*/
function InvertColors(props) {
  return createThemedIcon(props, FilledInvertColors, OutlineInvertColors, RoundInvertColors, SharpInvertColors, TwoToneInvertColors);
};