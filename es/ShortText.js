import { createThemedIcon } from './utils/createThemedIcon';
import { FilledShortText } from './FilledShortText';
import { OutlineShortText } from './OutlineShortText';
import { RoundShortText } from './RoundShortText';
import { SharpShortText } from './SharpShortText';
import { TwoToneShortText } from './TwoToneShortText';
export var ShortText =
/*#__PURE__*/
function ShortText(props) {
  return createThemedIcon(props, FilledShortText, OutlineShortText, RoundShortText, SharpShortText, TwoToneShortText);
};