import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatSize } from './FilledFormatSize'
import { OutlineFormatSize } from './OutlineFormatSize'
import { RoundFormatSize } from './RoundFormatSize'
import { SharpFormatSize } from './SharpFormatSize'
import { TwoToneFormatSize } from './TwoToneFormatSize'

export const FormatSize = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatSize, OutlineFormatSize, RoundFormatSize, SharpFormatSize, TwoToneFormatSize)
