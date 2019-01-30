import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatClear } from './FilledFormatClear'
import { OutlineFormatClear } from './OutlineFormatClear'
import { RoundFormatClear } from './RoundFormatClear'
import { SharpFormatClear } from './SharpFormatClear'
import { TwoToneFormatClear } from './TwoToneFormatClear'

export const FormatClear = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatClear, OutlineFormatClear, RoundFormatClear, SharpFormatClear, TwoToneFormatClear)
