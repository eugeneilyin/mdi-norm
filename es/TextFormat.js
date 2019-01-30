import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTextFormat } from './FilledTextFormat';
import { OutlineTextFormat } from './OutlineTextFormat';
import { RoundTextFormat } from './RoundTextFormat';
import { SharpTextFormat } from './SharpTextFormat';
import { TwoToneTextFormat } from './TwoToneTextFormat';
export var TextFormat =
/*#__PURE__*/
function TextFormat(props) {
  return createThemedIcon(props, FilledTextFormat, OutlineTextFormat, RoundTextFormat, SharpTextFormat, TwoToneTextFormat);
};