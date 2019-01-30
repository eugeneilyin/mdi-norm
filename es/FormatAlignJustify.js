import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFormatAlignJustify } from './FilledFormatAlignJustify';
import { OutlineFormatAlignJustify } from './OutlineFormatAlignJustify';
import { RoundFormatAlignJustify } from './RoundFormatAlignJustify';
import { SharpFormatAlignJustify } from './SharpFormatAlignJustify';
import { TwoToneFormatAlignJustify } from './TwoToneFormatAlignJustify';
export var FormatAlignJustify =
/*#__PURE__*/
function FormatAlignJustify(props) {
  return createThemedIcon(props, FilledFormatAlignJustify, OutlineFormatAlignJustify, RoundFormatAlignJustify, SharpFormatAlignJustify, TwoToneFormatAlignJustify);
};