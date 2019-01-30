import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatColorText } from './FilledFormatColorText'
import { OutlineFormatColorText } from './OutlineFormatColorText'
import { RoundFormatColorText } from './RoundFormatColorText'
import { SharpFormatColorText } from './SharpFormatColorText'
import { TwoToneFormatColorText } from './TwoToneFormatColorText'

export const FormatColorText = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatColorText, OutlineFormatColorText, RoundFormatColorText, SharpFormatColorText, TwoToneFormatColorText)
