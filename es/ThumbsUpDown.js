import { createThemedIcon } from './utils/createThemedIcon';
import { FilledThumbsUpDown } from './FilledThumbsUpDown';
import { OutlineThumbsUpDown } from './OutlineThumbsUpDown';
import { RoundThumbsUpDown } from './RoundThumbsUpDown';
import { SharpThumbsUpDown } from './SharpThumbsUpDown';
import { TwoToneThumbsUpDown } from './TwoToneThumbsUpDown';
export var ThumbsUpDown =
/*#__PURE__*/
function ThumbsUpDown(props) {
  return createThemedIcon(props, FilledThumbsUpDown, OutlineThumbsUpDown, RoundThumbsUpDown, SharpThumbsUpDown, TwoToneThumbsUpDown);
};