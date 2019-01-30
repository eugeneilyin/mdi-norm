import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatShapes } from './FilledFormatShapes'
import { OutlineFormatShapes } from './OutlineFormatShapes'
import { RoundFormatShapes } from './RoundFormatShapes'
import { SharpFormatShapes } from './SharpFormatShapes'
import { TwoToneFormatShapes } from './TwoToneFormatShapes'

export const FormatShapes = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatShapes, OutlineFormatShapes, RoundFormatShapes, SharpFormatShapes, TwoToneFormatShapes)
