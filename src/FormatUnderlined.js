import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatUnderlined } from './FilledFormatUnderlined'
import { OutlineFormatUnderlined } from './OutlineFormatUnderlined'
import { RoundFormatUnderlined } from './RoundFormatUnderlined'
import { SharpFormatUnderlined } from './SharpFormatUnderlined'
import { TwoToneFormatUnderlined } from './TwoToneFormatUnderlined'

export const FormatUnderlined = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatUnderlined, OutlineFormatUnderlined, RoundFormatUnderlined, SharpFormatUnderlined, TwoToneFormatUnderlined)
