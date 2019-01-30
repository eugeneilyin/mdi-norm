import { createThemedIcon } from './utils/createThemedIcon';
import { FilledThumbUp } from './FilledThumbUp';
import { OutlineThumbUp } from './OutlineThumbUp';
import { RoundThumbUp } from './RoundThumbUp';
import { SharpThumbUp } from './SharpThumbUp';
import { TwoToneThumbUp } from './TwoToneThumbUp';
export var ThumbUp =
/*#__PURE__*/
function ThumbUp(props) {
  return createThemedIcon(props, FilledThumbUp, OutlineThumbUp, RoundThumbUp, SharpThumbUp, TwoToneThumbUp);
};