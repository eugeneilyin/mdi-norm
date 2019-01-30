import { createThemedIcon } from './utils/createThemedIcon'
import { FilledInvertColors } from './FilledInvertColors'
import { OutlineInvertColors } from './OutlineInvertColors'
import { RoundInvertColors } from './RoundInvertColors'
import { SharpInvertColors } from './SharpInvertColors'
import { TwoToneInvertColors } from './TwoToneInvertColors'

export const InvertColors = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledInvertColors, OutlineInvertColors, RoundInvertColors, SharpInvertColors, TwoToneInvertColors)
