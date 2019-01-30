import { createThemedIcon } from './utils/createThemedIcon'
import { FilledModeComment } from './FilledModeComment'
import { OutlineModeComment } from './OutlineModeComment'
import { RoundModeComment } from './RoundModeComment'
import { SharpModeComment } from './SharpModeComment'
import { TwoToneModeComment } from './TwoToneModeComment'

export const ModeComment = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledModeComment, OutlineModeComment, RoundModeComment, SharpModeComment, TwoToneModeComment)
