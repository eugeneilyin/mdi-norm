import { createThemedIcon } from './utils/createThemedIcon';
import { FilledStar } from './FilledStar';
import { OutlineStar } from './OutlineStar';
import { RoundStar } from './RoundStar';
import { SharpStar } from './SharpStar';
import { TwoToneStar } from './TwoToneStar';
export var Star =
/*#__PURE__*/
function Star(props) {
  return createThemedIcon(props, FilledStar, OutlineStar, RoundStar, SharpStar, TwoToneStar);
};