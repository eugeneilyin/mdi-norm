import { createThemedIcon } from './utils/createThemedIcon'
import { FilledInvertColorsOff } from './FilledInvertColorsOff'
import { OutlineInvertColorsOff } from './OutlineInvertColorsOff'
import { RoundInvertColorsOff } from './RoundInvertColorsOff'
import { SharpInvertColorsOff } from './SharpInvertColorsOff'
import { TwoToneInvertColorsOff } from './TwoToneInvertColorsOff'

export const InvertColorsOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledInvertColorsOff, OutlineInvertColorsOff, RoundInvertColorsOff, SharpInvertColorsOff, TwoToneInvertColorsOff)
