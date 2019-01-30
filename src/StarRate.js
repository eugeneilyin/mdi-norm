import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStarRate } from './FilledStarRate'
import { OutlineStarRate } from './OutlineStarRate'
import { RoundStarRate } from './RoundStarRate'
import { SharpStarRate } from './SharpStarRate'
import { TwoToneStarRate } from './TwoToneStarRate'

export const StarRate = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStarRate, OutlineStarRate, RoundStarRate, SharpStarRate, TwoToneStarRate)
