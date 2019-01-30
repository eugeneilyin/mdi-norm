import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatIndentIncrease } from './FilledFormatIndentIncrease'
import { OutlineFormatIndentIncrease } from './OutlineFormatIndentIncrease'
import { RoundFormatIndentIncrease } from './RoundFormatIndentIncrease'
import { SharpFormatIndentIncrease } from './SharpFormatIndentIncrease'
import { TwoToneFormatIndentIncrease } from './TwoToneFormatIndentIncrease'

export const FormatIndentIncrease = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatIndentIncrease, OutlineFormatIndentIncrease, RoundFormatIndentIncrease, SharpFormatIndentIncrease, TwoToneFormatIndentIncrease)
