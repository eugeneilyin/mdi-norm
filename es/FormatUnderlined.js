import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFormatUnderlined } from './FilledFormatUnderlined';
import { OutlineFormatUnderlined } from './OutlineFormatUnderlined';
import { RoundFormatUnderlined } from './RoundFormatUnderlined';
import { SharpFormatUnderlined } from './SharpFormatUnderlined';
import { TwoToneFormatUnderlined } from './TwoToneFormatUnderlined';
export var FormatUnderlined =
/*#__PURE__*/
function FormatUnderlined(props) {
  return createThemedIcon(props, FilledFormatUnderlined, OutlineFormatUnderlined, RoundFormatUnderlined, SharpFormatUnderlined, TwoToneFormatUnderlined);
};