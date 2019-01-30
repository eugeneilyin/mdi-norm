import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTextRotateVertical } from './FilledTextRotateVertical';
import { OutlineTextRotateVertical } from './OutlineTextRotateVertical';
import { RoundTextRotateVertical } from './RoundTextRotateVertical';
import { SharpTextRotateVertical } from './SharpTextRotateVertical';
import { TwoToneTextRotateVertical } from './TwoToneTextRotateVertical';
export var TextRotateVertical =
/*#__PURE__*/
function TextRotateVertical(props) {
  return createThemedIcon(props, FilledTextRotateVertical, OutlineTextRotateVertical, RoundTextRotateVertical, SharpTextRotateVertical, TwoToneTextRotateVertical);
};