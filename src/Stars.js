import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStars } from './FilledStars'
import { OutlineStars } from './OutlineStars'
import { RoundStars } from './RoundStars'
import { SharpStars } from './SharpStars'
import { TwoToneStars } from './TwoToneStars'

export const Stars = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStars, OutlineStars, RoundStars, SharpStars, TwoToneStars)
