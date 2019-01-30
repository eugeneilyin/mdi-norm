import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAssignmentInd } from './FilledAssignmentInd'
import { OutlineAssignmentInd } from './OutlineAssignmentInd'
import { RoundAssignmentInd } from './RoundAssignmentInd'
import { SharpAssignmentInd } from './SharpAssignmentInd'
import { TwoToneAssignmentInd } from './TwoToneAssignmentInd'

export const AssignmentInd = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAssignmentInd, OutlineAssignmentInd, RoundAssignmentInd, SharpAssignmentInd, TwoToneAssignmentInd)
