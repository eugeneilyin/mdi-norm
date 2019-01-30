import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAssignmentReturned } from './FilledAssignmentReturned'
import { OutlineAssignmentReturned } from './OutlineAssignmentReturned'
import { RoundAssignmentReturned } from './RoundAssignmentReturned'
import { SharpAssignmentReturned } from './SharpAssignmentReturned'
import { TwoToneAssignmentReturned } from './TwoToneAssignmentReturned'

export const AssignmentReturned = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAssignmentReturned, OutlineAssignmentReturned, RoundAssignmentReturned, SharpAssignmentReturned, TwoToneAssignmentReturned)
