import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatColorReset } from './FilledFormatColorReset'
import { OutlineFormatColorReset } from './OutlineFormatColorReset'
import { RoundFormatColorReset } from './RoundFormatColorReset'
import { SharpFormatColorReset } from './SharpFormatColorReset'
import { TwoToneFormatColorReset } from './TwoToneFormatColorReset'

export const FormatColorReset = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatColorReset, OutlineFormatColorReset, RoundFormatColorReset, SharpFormatColorReset, TwoToneFormatColorReset)
