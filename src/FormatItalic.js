import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatItalic } from './FilledFormatItalic'
import { OutlineFormatItalic } from './OutlineFormatItalic'
import { RoundFormatItalic } from './RoundFormatItalic'
import { SharpFormatItalic } from './SharpFormatItalic'
import { TwoToneFormatItalic } from './TwoToneFormatItalic'

export const FormatItalic = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatItalic, OutlineFormatItalic, RoundFormatItalic, SharpFormatItalic, TwoToneFormatItalic)
