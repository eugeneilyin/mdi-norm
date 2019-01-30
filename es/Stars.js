import { createThemedIcon } from './utils/createThemedIcon';
import { FilledStars } from './FilledStars';
import { OutlineStars } from './OutlineStars';
import { RoundStars } from './RoundStars';
import { SharpStars } from './SharpStars';
import { TwoToneStars } from './TwoToneStars';
export var Stars =
/*#__PURE__*/
function Stars(props) {
  return createThemedIcon(props, FilledStars, OutlineStars, RoundStars, SharpStars, TwoToneStars);
};