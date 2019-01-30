import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAccessibleForward } from './FilledAccessibleForward'
import { OutlineAccessibleForward } from './OutlineAccessibleForward'
import { RoundAccessibleForward } from './RoundAccessibleForward'
import { SharpAccessibleForward } from './SharpAccessibleForward'
import { TwoToneAccessibleForward } from './TwoToneAccessibleForward'

export const AccessibleForward = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAccessibleForward, OutlineAccessibleForward, RoundAccessibleForward, SharpAccessibleForward, TwoToneAccessibleForward)
