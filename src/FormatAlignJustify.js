import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatAlignJustify } from './FilledFormatAlignJustify'
import { OutlineFormatAlignJustify } from './OutlineFormatAlignJustify'
import { RoundFormatAlignJustify } from './RoundFormatAlignJustify'
import { SharpFormatAlignJustify } from './SharpFormatAlignJustify'
import { TwoToneFormatAlignJustify } from './TwoToneFormatAlignJustify'

export const FormatAlignJustify = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatAlignJustify, OutlineFormatAlignJustify, RoundFormatAlignJustify, SharpFormatAlignJustify, TwoToneFormatAlignJustify)
