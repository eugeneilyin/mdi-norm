import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFormatListNumbered } from './FilledFormatListNumbered';
import { OutlineFormatListNumbered } from './OutlineFormatListNumbered';
import { RoundFormatListNumbered } from './RoundFormatListNumbered';
import { SharpFormatListNumbered } from './SharpFormatListNumbered';
import { TwoToneFormatListNumbered } from './TwoToneFormatListNumbered';
export var FormatListNumbered =
/*#__PURE__*/
function FormatListNumbered(props) {
  return createThemedIcon(props, FilledFormatListNumbered, OutlineFormatListNumbered, RoundFormatListNumbered, SharpFormatListNumbered, TwoToneFormatListNumbered);
};