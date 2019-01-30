import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatIndentDecrease } from './FilledFormatIndentDecrease'
import { OutlineFormatIndentDecrease } from './OutlineFormatIndentDecrease'
import { RoundFormatIndentDecrease } from './RoundFormatIndentDecrease'
import { SharpFormatIndentDecrease } from './SharpFormatIndentDecrease'
import { TwoToneFormatIndentDecrease } from './TwoToneFormatIndentDecrease'

export const FormatIndentDecrease = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatIndentDecrease, OutlineFormatIndentDecrease, RoundFormatIndentDecrease, SharpFormatIndentDecrease, TwoToneFormatIndentDecrease)
