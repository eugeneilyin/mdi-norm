import { createThemedIcon } from './utils/createThemedIcon';
import { FilledStarBorder } from './FilledStarBorder';
import { OutlineStarBorder } from './OutlineStarBorder';
import { RoundStarBorder } from './RoundStarBorder';
import { SharpStarBorder } from './SharpStarBorder';
import { TwoToneStarBorder } from './TwoToneStarBorder';
export var StarBorder =
/*#__PURE__*/
function StarBorder(props) {
  return createThemedIcon(props, FilledStarBorder, OutlineStarBorder, RoundStarBorder, SharpStarBorder, TwoToneStarBorder);
};