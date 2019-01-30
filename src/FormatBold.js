import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatBold } from './FilledFormatBold'
import { OutlineFormatBold } from './OutlineFormatBold'
import { RoundFormatBold } from './RoundFormatBold'
import { SharpFormatBold } from './SharpFormatBold'
import { TwoToneFormatBold } from './TwoToneFormatBold'

export const FormatBold = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatBold, OutlineFormatBold, RoundFormatBold, SharpFormatBold, TwoToneFormatBold)
