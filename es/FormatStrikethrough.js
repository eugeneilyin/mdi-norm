import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFormatStrikethrough } from './FilledFormatStrikethrough';
import { OutlineFormatStrikethrough } from './OutlineFormatStrikethrough';
import { RoundFormatStrikethrough } from './RoundFormatStrikethrough';
import { SharpFormatStrikethrough } from './SharpFormatStrikethrough';
import { TwoToneFormatStrikethrough } from './TwoToneFormatStrikethrough';
export var FormatStrikethrough =
/*#__PURE__*/
function FormatStrikethrough(props) {
  return createThemedIcon(props, FilledFormatStrikethrough, OutlineFormatStrikethrough, RoundFormatStrikethrough, SharpFormatStrikethrough, TwoToneFormatStrikethrough);
};