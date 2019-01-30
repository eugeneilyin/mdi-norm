import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFormatListBulleted } from './FilledFormatListBulleted';
import { OutlineFormatListBulleted } from './OutlineFormatListBulleted';
import { RoundFormatListBulleted } from './RoundFormatListBulleted';
import { SharpFormatListBulleted } from './SharpFormatListBulleted';
import { TwoToneFormatListBulleted } from './TwoToneFormatListBulleted';
export var FormatListBulleted =
/*#__PURE__*/
function FormatListBulleted(props) {
  return createThemedIcon(props, FilledFormatListBulleted, OutlineFormatListBulleted, RoundFormatListBulleted, SharpFormatListBulleted, TwoToneFormatListBulleted);
};