import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatAlignCenter } from './FilledFormatAlignCenter'
import { OutlineFormatAlignCenter } from './OutlineFormatAlignCenter'
import { RoundFormatAlignCenter } from './RoundFormatAlignCenter'
import { SharpFormatAlignCenter } from './SharpFormatAlignCenter'
import { TwoToneFormatAlignCenter } from './TwoToneFormatAlignCenter'

export const FormatAlignCenter = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatAlignCenter, OutlineFormatAlignCenter, RoundFormatAlignCenter, SharpFormatAlignCenter, TwoToneFormatAlignCenter)
