import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewDay } from './FilledViewDay';
import { OutlineViewDay } from './OutlineViewDay';
import { RoundViewDay } from './RoundViewDay';
import { SharpViewDay } from './SharpViewDay';
import { TwoToneViewDay } from './TwoToneViewDay';
export var ViewDay =
/*#__PURE__*/
function ViewDay(props) {
  return createThemedIcon(props, FilledViewDay, OutlineViewDay, RoundViewDay, SharpViewDay, TwoToneViewDay);
};