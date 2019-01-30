import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAssignmentTurnedIn } from './FilledAssignmentTurnedIn';
import { OutlineAssignmentTurnedIn } from './OutlineAssignmentTurnedIn';
import { RoundAssignmentTurnedIn } from './RoundAssignmentTurnedIn';
import { SharpAssignmentTurnedIn } from './SharpAssignmentTurnedIn';
import { TwoToneAssignmentTurnedIn } from './TwoToneAssignmentTurnedIn';
export var AssignmentTurnedIn =
/*#__PURE__*/
function AssignmentTurnedIn(props) {
  return createThemedIcon(props, FilledAssignmentTurnedIn, OutlineAssignmentTurnedIn, RoundAssignmentTurnedIn, SharpAssignmentTurnedIn, TwoToneAssignmentTurnedIn);
};