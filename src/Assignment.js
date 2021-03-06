import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAssignment } from './FilledAssignment'
import { OutlineAssignment } from './OutlineAssignment'
import { RoundAssignment } from './RoundAssignment'
import { SharpAssignment } from './SharpAssignment'
import { TwoToneAssignment } from './TwoToneAssignment'

export const Assignment = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAssignment, OutlineAssignment, RoundAssignment, SharpAssignment, TwoToneAssignment)
