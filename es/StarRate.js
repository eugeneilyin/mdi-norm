import { createThemedIcon } from './utils/createThemedIcon';
import { FilledStarRate } from './FilledStarRate';
import { OutlineStarRate } from './OutlineStarRate';
import { RoundStarRate } from './RoundStarRate';
import { SharpStarRate } from './SharpStarRate';
import { TwoToneStarRate } from './TwoToneStarRate';
export var StarRate =
/*#__PURE__*/
function StarRate(props) {
  return createThemedIcon(props, FilledStarRate, OutlineStarRate, RoundStarRate, SharpStarRate, TwoToneStarRate);
};