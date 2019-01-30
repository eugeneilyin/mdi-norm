import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFormatColorFill } from './FilledFormatColorFill';
import { OutlineFormatColorFill } from './OutlineFormatColorFill';
import { RoundFormatColorFill } from './RoundFormatColorFill';
import { SharpFormatColorFill } from './SharpFormatColorFill';
import { TwoToneFormatColorFill } from './TwoToneFormatColorFill';
export var FormatColorFill =
/*#__PURE__*/
function FormatColorFill(props) {
  return createThemedIcon(props, FilledFormatColorFill, OutlineFormatColorFill, RoundFormatColorFill, SharpFormatColorFill, TwoToneFormatColorFill);
};