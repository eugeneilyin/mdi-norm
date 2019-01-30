import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatQuote } from './FilledFormatQuote'
import { OutlineFormatQuote } from './OutlineFormatQuote'
import { RoundFormatQuote } from './RoundFormatQuote'
import { SharpFormatQuote } from './SharpFormatQuote'
import { TwoToneFormatQuote } from './TwoToneFormatQuote'

export const FormatQuote = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatQuote, OutlineFormatQuote, RoundFormatQuote, SharpFormatQuote, TwoToneFormatQuote)
