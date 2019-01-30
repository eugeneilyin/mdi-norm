import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFormatPaint } from './FilledFormatPaint';
import { OutlineFormatPaint } from './OutlineFormatPaint';
import { RoundFormatPaint } from './RoundFormatPaint';
import { SharpFormatPaint } from './SharpFormatPaint';
import { TwoToneFormatPaint } from './TwoToneFormatPaint';
export var FormatPaint =
/*#__PURE__*/
function FormatPaint(props) {
  return createThemedIcon(props, FilledFormatPaint, OutlineFormatPaint, RoundFormatPaint, SharpFormatPaint, TwoToneFormatPaint);
};