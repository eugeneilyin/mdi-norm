import { createThemedIcon } from './utils/createThemedIcon';
import { FilledArrowDropUp } from './FilledArrowDropUp';
import { OutlineArrowDropUp } from './OutlineArrowDropUp';
import { RoundArrowDropUp } from './RoundArrowDropUp';
import { SharpArrowDropUp } from './SharpArrowDropUp';
import { TwoToneArrowDropUp } from './TwoToneArrowDropUp';
export var ArrowDropUp =
/*#__PURE__*/
function ArrowDropUp(props) {
  return createThemedIcon(props, FilledArrowDropUp, OutlineArrowDropUp, RoundArrowDropUp, SharpArrowDropUp, TwoToneArrowDropUp);
};