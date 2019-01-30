import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFlip } from './FilledFlip';
import { OutlineFlip } from './OutlineFlip';
import { RoundFlip } from './RoundFlip';
import { SharpFlip } from './SharpFlip';
import { TwoToneFlip } from './TwoToneFlip';
export var Flip =
/*#__PURE__*/
function Flip(props) {
  return createThemedIcon(props, FilledFlip, OutlineFlip, RoundFlip, SharpFlip, TwoToneFlip);
};