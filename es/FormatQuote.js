import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFormatQuote } from './FilledFormatQuote';
import { OutlineFormatQuote } from './OutlineFormatQuote';
import { RoundFormatQuote } from './RoundFormatQuote';
import { SharpFormatQuote } from './SharpFormatQuote';
import { TwoToneFormatQuote } from './TwoToneFormatQuote';
export var FormatQuote =
/*#__PURE__*/
function FormatQuote(props) {
  return createThemedIcon(props, FilledFormatQuote, OutlineFormatQuote, RoundFormatQuote, SharpFormatQuote, TwoToneFormatQuote);
};