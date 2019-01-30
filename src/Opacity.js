import { createThemedIcon } from './utils/createThemedIcon'
import { FilledOpacity } from './FilledOpacity'
import { OutlineOpacity } from './OutlineOpacity'
import { RoundOpacity } from './RoundOpacity'
import { SharpOpacity } from './SharpOpacity'
import { TwoToneOpacity } from './TwoToneOpacity'

export const Opacity = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledOpacity, OutlineOpacity, RoundOpacity, SharpOpacity, TwoToneOpacity)
