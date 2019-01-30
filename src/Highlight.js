import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHighlight } from './FilledHighlight'
import { OutlineHighlight } from './OutlineHighlight'
import { RoundHighlight } from './RoundHighlight'
import { SharpHighlight } from './SharpHighlight'
import { TwoToneHighlight } from './TwoToneHighlight'

export const Highlight = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHighlight, OutlineHighlight, RoundHighlight, SharpHighlight, TwoToneHighlight)
