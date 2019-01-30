import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTextRotateUp } from './FilledTextRotateUp';
import { OutlineTextRotateUp } from './OutlineTextRotateUp';
import { RoundTextRotateUp } from './RoundTextRotateUp';
import { SharpTextRotateUp } from './SharpTextRotateUp';
import { TwoToneTextRotateUp } from './TwoToneTextRotateUp';
export var TextRotateUp =
/*#__PURE__*/
function TextRotateUp(props) {
  return createThemedIcon(props, FilledTextRotateUp, OutlineTextRotateUp, RoundTextRotateUp, SharpTextRotateUp, TwoToneTextRotateUp);
};