import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAssignmentReturn } from './FilledAssignmentReturn'
import { OutlineAssignmentReturn } from './OutlineAssignmentReturn'
import { RoundAssignmentReturn } from './RoundAssignmentReturn'
import { SharpAssignmentReturn } from './SharpAssignmentReturn'
import { TwoToneAssignmentReturn } from './TwoToneAssignmentReturn'

export const AssignmentReturn = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAssignmentReturn, OutlineAssignmentReturn, RoundAssignmentReturn, SharpAssignmentReturn, TwoToneAssignmentReturn)
