import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFormatColorText } from './FilledFormatColorText';
import { OutlineFormatColorText } from './OutlineFormatColorText';
import { RoundFormatColorText } from './RoundFormatColorText';
import { SharpFormatColorText } from './SharpFormatColorText';
import { TwoToneFormatColorText } from './TwoToneFormatColorText';
export var FormatColorText =
/*#__PURE__*/
function FormatColorText(props) {
  return createThemedIcon(props, FilledFormatColorText, OutlineFormatColorText, RoundFormatColorText, SharpFormatColorText, TwoToneFormatColorText);
};