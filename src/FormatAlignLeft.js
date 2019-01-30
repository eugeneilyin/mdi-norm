import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatAlignLeft } from './FilledFormatAlignLeft'
import { OutlineFormatAlignLeft } from './OutlineFormatAlignLeft'
import { RoundFormatAlignLeft } from './RoundFormatAlignLeft'
import { SharpFormatAlignLeft } from './SharpFormatAlignLeft'
import { TwoToneFormatAlignLeft } from './TwoToneFormatAlignLeft'

export const FormatAlignLeft = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatAlignLeft, OutlineFormatAlignLeft, RoundFormatAlignLeft, SharpFormatAlignLeft, TwoToneFormatAlignLeft)
