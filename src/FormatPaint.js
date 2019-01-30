import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatPaint } from './FilledFormatPaint'
import { OutlineFormatPaint } from './OutlineFormatPaint'
import { RoundFormatPaint } from './RoundFormatPaint'
import { SharpFormatPaint } from './SharpFormatPaint'
import { TwoToneFormatPaint } from './TwoToneFormatPaint'

export const FormatPaint = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatPaint, OutlineFormatPaint, RoundFormatPaint, SharpFormatPaint, TwoToneFormatPaint)
