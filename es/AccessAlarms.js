import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAccessAlarms } from './FilledAccessAlarms';
import { OutlineAccessAlarms } from './OutlineAccessAlarms';
import { RoundAccessAlarms } from './RoundAccessAlarms';
import { SharpAccessAlarms } from './SharpAccessAlarms';
import { TwoToneAccessAlarms } from './TwoToneAccessAlarms';
export var AccessAlarms =
/*#__PURE__*/
function AccessAlarms(props) {
  return createThemedIcon(props, FilledAccessAlarms, OutlineAccessAlarms, RoundAccessAlarms, SharpAccessAlarms, TwoToneAccessAlarms);
};