import { createThemedIcon } from './utils/createThemedIcon'
import { FilledThumbDown } from './FilledThumbDown'
import { OutlineThumbDown } from './OutlineThumbDown'
import { RoundThumbDown } from './RoundThumbDown'
import { SharpThumbDown } from './SharpThumbDown'
import { TwoToneThumbDown } from './TwoToneThumbDown'

export const ThumbDown = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledThumbDown, OutlineThumbDown, RoundThumbDown, SharpThumbDown, TwoToneThumbDown)
