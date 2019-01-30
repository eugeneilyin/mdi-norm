import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatColorFill } from './FilledFormatColorFill'
import { OutlineFormatColorFill } from './OutlineFormatColorFill'
import { RoundFormatColorFill } from './RoundFormatColorFill'
import { SharpFormatColorFill } from './SharpFormatColorFill'
import { TwoToneFormatColorFill } from './TwoToneFormatColorFill'

export const FormatColorFill = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatColorFill, OutlineFormatColorFill, RoundFormatColorFill, SharpFormatColorFill, TwoToneFormatColorFill)
