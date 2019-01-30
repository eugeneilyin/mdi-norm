import { createThemedIcon } from './utils/createThemedIcon'
import { FilledForward } from './FilledForward'
import { OutlineForward } from './OutlineForward'
import { RoundForward } from './RoundForward'
import { SharpForward } from './SharpForward'
import { TwoToneForward } from './TwoToneForward'

export const Forward = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledForward, OutlineForward, RoundForward, SharpForward, TwoToneForward)
