import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalDining } from './FilledLocalDining';
import { OutlineLocalDining } from './OutlineLocalDining';
import { RoundLocalDining } from './RoundLocalDining';
import { SharpLocalDining } from './SharpLocalDining';
import { TwoToneLocalDining } from './TwoToneLocalDining';
export var LocalDining =
/*#__PURE__*/
function LocalDining(props) {
  return createThemedIcon(props, FilledLocalDining, OutlineLocalDining, RoundLocalDining, SharpLocalDining, TwoToneLocalDining);
};