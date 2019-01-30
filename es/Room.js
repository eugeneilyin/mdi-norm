import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRoom } from './FilledRoom';
import { OutlineRoom } from './OutlineRoom';
import { RoundRoom } from './RoundRoom';
import { SharpRoom } from './SharpRoom';
import { TwoToneRoom } from './TwoToneRoom';
export var Room =
/*#__PURE__*/
function Room(props) {
  return createThemedIcon(props, FilledRoom, OutlineRoom, RoundRoom, SharpRoom, TwoToneRoom);
};