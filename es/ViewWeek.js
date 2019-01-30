import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewWeek } from './FilledViewWeek';
import { OutlineViewWeek } from './OutlineViewWeek';
import { RoundViewWeek } from './RoundViewWeek';
import { SharpViewWeek } from './SharpViewWeek';
import { TwoToneViewWeek } from './TwoToneViewWeek';
export var ViewWeek =
/*#__PURE__*/
function ViewWeek(props) {
  return createThemedIcon(props, FilledViewWeek, OutlineViewWeek, RoundViewWeek, SharpViewWeek, TwoToneViewWeek);
};