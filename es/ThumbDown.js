import { createThemedIcon } from './utils/createThemedIcon';
import { FilledThumbDown } from './FilledThumbDown';
import { OutlineThumbDown } from './OutlineThumbDown';
import { RoundThumbDown } from './RoundThumbDown';
import { SharpThumbDown } from './SharpThumbDown';
import { TwoToneThumbDown } from './TwoToneThumbDown';
export var ThumbDown =
/*#__PURE__*/
function ThumbDown(props) {
  return createThemedIcon(props, FilledThumbDown, OutlineThumbDown, RoundThumbDown, SharpThumbDown, TwoToneThumbDown);
};