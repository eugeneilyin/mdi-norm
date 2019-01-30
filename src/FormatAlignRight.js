import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatAlignRight } from './FilledFormatAlignRight'
import { OutlineFormatAlignRight } from './OutlineFormatAlignRight'
import { RoundFormatAlignRight } from './RoundFormatAlignRight'
import { SharpFormatAlignRight } from './SharpFormatAlignRight'
import { TwoToneFormatAlignRight } from './TwoToneFormatAlignRight'

export const FormatAlignRight = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatAlignRight, OutlineFormatAlignRight, RoundFormatAlignRight, SharpFormatAlignRight, TwoToneFormatAlignRight)
