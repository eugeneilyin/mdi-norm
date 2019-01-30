import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAssignmentLate } from './FilledAssignmentLate'
import { OutlineAssignmentLate } from './OutlineAssignmentLate'
import { RoundAssignmentLate } from './RoundAssignmentLate'
import { SharpAssignmentLate } from './SharpAssignmentLate'
import { TwoToneAssignmentLate } from './TwoToneAssignmentLate'

export const AssignmentLate = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAssignmentLate, OutlineAssignmentLate, RoundAssignmentLate, SharpAssignmentLate, TwoToneAssignmentLate)
