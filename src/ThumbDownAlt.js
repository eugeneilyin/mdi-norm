import { createThemedIcon } from './utils/createThemedIcon'
import { FilledThumbDownAlt } from './FilledThumbDownAlt'
import { OutlineThumbDownAlt } from './OutlineThumbDownAlt'
import { RoundThumbDownAlt } from './RoundThumbDownAlt'
import { SharpThumbDownAlt } from './SharpThumbDownAlt'
import { TwoToneThumbDownAlt } from './TwoToneThumbDownAlt'

export const ThumbDownAlt = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledThumbDownAlt, OutlineThumbDownAlt, RoundThumbDownAlt, SharpThumbDownAlt, TwoToneThumbDownAlt)
