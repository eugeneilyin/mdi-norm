import { createThemedIcon } from './utils/createThemedIcon'
import { FilledThumbUp } from './FilledThumbUp'
import { OutlineThumbUp } from './OutlineThumbUp'
import { RoundThumbUp } from './RoundThumbUp'
import { SharpThumbUp } from './SharpThumbUp'
import { TwoToneThumbUp } from './TwoToneThumbUp'

export const ThumbUp = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledThumbUp, OutlineThumbUp, RoundThumbUp, SharpThumbUp, TwoToneThumbUp)
