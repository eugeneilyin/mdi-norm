import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStarBorder } from './FilledStarBorder'
import { OutlineStarBorder } from './OutlineStarBorder'
import { RoundStarBorder } from './RoundStarBorder'
import { SharpStarBorder } from './SharpStarBorder'
import { TwoToneStarBorder } from './TwoToneStarBorder'

export const StarBorder = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStarBorder, OutlineStarBorder, RoundStarBorder, SharpStarBorder, TwoToneStarBorder)
