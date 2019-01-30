import { createThemedIcon } from './utils/createThemedIcon';
import { FilledScore } from './FilledScore';
import { OutlineScore } from './OutlineScore';
import { RoundScore } from './RoundScore';
import { SharpScore } from './SharpScore';
import { TwoToneScore } from './TwoToneScore';
export var Score =
/*#__PURE__*/
function Score(props) {
  return createThemedIcon(props, FilledScore, OutlineScore, RoundScore, SharpScore, TwoToneScore);
};