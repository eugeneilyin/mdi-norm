import { createThemedIcon } from './utils/createThemedIcon'
import { FilledThumbUpAlt } from './FilledThumbUpAlt'
import { OutlineThumbUpAlt } from './OutlineThumbUpAlt'
import { RoundThumbUpAlt } from './RoundThumbUpAlt'
import { SharpThumbUpAlt } from './SharpThumbUpAlt'
import { TwoToneThumbUpAlt } from './TwoToneThumbUpAlt'

export const ThumbUpAlt = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledThumbUpAlt, OutlineThumbUpAlt, RoundThumbUpAlt, SharpThumbUpAlt, TwoToneThumbUpAlt)
