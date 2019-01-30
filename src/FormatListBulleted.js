import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFormatListBulleted } from './FilledFormatListBulleted'
import { OutlineFormatListBulleted } from './OutlineFormatListBulleted'
import { RoundFormatListBulleted } from './RoundFormatListBulleted'
import { SharpFormatListBulleted } from './SharpFormatListBulleted'
import { TwoToneFormatListBulleted } from './TwoToneFormatListBulleted'

export const FormatListBulleted = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFormatListBulleted, OutlineFormatListBulleted, RoundFormatListBulleted, SharpFormatListBulleted, TwoToneFormatListBulleted)
