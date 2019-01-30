import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFormatLineSpacing } from './FilledFormatLineSpacing';
import { OutlineFormatLineSpacing } from './OutlineFormatLineSpacing';
import { RoundFormatLineSpacing } from './RoundFormatLineSpacing';
import { SharpFormatLineSpacing } from './SharpFormatLineSpacing';
import { TwoToneFormatLineSpacing } from './TwoToneFormatLineSpacing';
export var FormatLineSpacing =
/*#__PURE__*/
function FormatLineSpacing(props) {
  return createThemedIcon(props, FilledFormatLineSpacing, OutlineFormatLineSpacing, RoundFormatLineSpacing, SharpFormatLineSpacing, TwoToneFormatLineSpacing);
};