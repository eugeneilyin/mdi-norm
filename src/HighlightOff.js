import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHighlightOff } from './FilledHighlightOff'
import { OutlineHighlightOff } from './OutlineHighlightOff'
import { RoundHighlightOff } from './RoundHighlightOff'
import { SharpHighlightOff } from './SharpHighlightOff'
import { TwoToneHighlightOff } from './TwoToneHighlightOff'

export const HighlightOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHighlightOff, OutlineHighlightOff, RoundHighlightOff, SharpHighlightOff, TwoToneHighlightOff)
