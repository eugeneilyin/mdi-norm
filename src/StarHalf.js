import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStarHalf } from './FilledStarHalf'
import { OutlineStarHalf } from './OutlineStarHalf'
import { RoundStarHalf } from './RoundStarHalf'
import { SharpStarHalf } from './SharpStarHalf'
import { TwoToneStarHalf } from './TwoToneStarHalf'

export const StarHalf = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStarHalf, OutlineStarHalf, RoundStarHalf, SharpStarHalf, TwoToneStarHalf)
