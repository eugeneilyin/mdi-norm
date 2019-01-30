import { createThemedIcon } from './utils/createThemedIcon'
import { FilledThumbsUpDown } from './FilledThumbsUpDown'
import { OutlineThumbsUpDown } from './OutlineThumbsUpDown'
import { RoundThumbsUpDown } from './RoundThumbsUpDown'
import { SharpThumbsUpDown } from './SharpThumbsUpDown'
import { TwoToneThumbsUpDown } from './TwoToneThumbsUpDown'

export const ThumbsUpDown = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledThumbsUpDown, OutlineThumbsUpDown, RoundThumbsUpDown, SharpThumbsUpDown, TwoToneThumbsUpDown)
