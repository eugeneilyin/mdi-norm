import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAssignmentInd } from './FilledAssignmentInd';
import { OutlineAssignmentInd } from './OutlineAssignmentInd';
import { RoundAssignmentInd } from './RoundAssignmentInd';
import { SharpAssignmentInd } from './SharpAssignmentInd';
import { TwoToneAssignmentInd } from './TwoToneAssignmentInd';
export var AssignmentInd =
/*#__PURE__*/
function AssignmentInd(props) {
  return createThemedIcon(props, FilledAssignmentInd, OutlineAssignmentInd, RoundAssignmentInd, SharpAssignmentInd, TwoToneAssignmentInd);
};