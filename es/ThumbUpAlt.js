import { createThemedIcon } from './utils/createThemedIcon';
import { FilledThumbUpAlt } from './FilledThumbUpAlt';
import { OutlineThumbUpAlt } from './OutlineThumbUpAlt';
import { RoundThumbUpAlt } from './RoundThumbUpAlt';
import { SharpThumbUpAlt } from './SharpThumbUpAlt';
import { TwoToneThumbUpAlt } from './TwoToneThumbUpAlt';
export var ThumbUpAlt =
/*#__PURE__*/
function ThumbUpAlt(props) {
  return createThemedIcon(props, FilledThumbUpAlt, OutlineThumbUpAlt, RoundThumbUpAlt, SharpThumbUpAlt, TwoToneThumbUpAlt);
};