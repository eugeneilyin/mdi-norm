import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWeekend } from './FilledWeekend';
import { OutlineWeekend } from './OutlineWeekend';
import { RoundWeekend } from './RoundWeekend';
import { SharpWeekend } from './SharpWeekend';
import { TwoToneWeekend } from './TwoToneWeekend';
export var Weekend =
/*#__PURE__*/
function Weekend(props) {
  return createThemedIcon(props, FilledWeekend, OutlineWeekend, RoundWeekend, SharpWeekend, TwoToneWeekend);
};