import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTimeToLeave } from './FilledTimeToLeave';
import { OutlineTimeToLeave } from './OutlineTimeToLeave';
import { RoundTimeToLeave } from './RoundTimeToLeave';
import { SharpTimeToLeave } from './SharpTimeToLeave';
import { TwoToneTimeToLeave } from './TwoToneTimeToLeave';
export var TimeToLeave =
/*#__PURE__*/
function TimeToLeave(props) {
  return createThemedIcon(props, FilledTimeToLeave, OutlineTimeToLeave, RoundTimeToLeave, SharpTimeToLeave, TwoToneTimeToLeave);
};