import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWrapText } from './FilledWrapText';
import { OutlineWrapText } from './OutlineWrapText';
import { RoundWrapText } from './RoundWrapText';
import { SharpWrapText } from './SharpWrapText';
import { TwoToneWrapText } from './TwoToneWrapText';
export var WrapText =
/*#__PURE__*/
function WrapText(props) {
  return createThemedIcon(props, FilledWrapText, OutlineWrapText, RoundWrapText, SharpWrapText, TwoToneWrapText);
};