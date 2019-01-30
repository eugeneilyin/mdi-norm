import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStar } from './FilledStar'
import { OutlineStar } from './OutlineStar'
import { RoundStar } from './RoundStar'
import { SharpStar } from './SharpStar'
import { TwoToneStar } from './TwoToneStar'

export const Star = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStar, OutlineStar, RoundStar, SharpStar, TwoToneStar)
