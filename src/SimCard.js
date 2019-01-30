import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSimCard } from './FilledSimCard'
import { OutlineSimCard } from './OutlineSimCard'
import { RoundSimCard } from './RoundSimCard'
import { SharpSimCard } from './SharpSimCard'
import { TwoToneSimCard } from './TwoToneSimCard'

export const SimCard = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSimCard, OutlineSimCard, RoundSimCard, SharpSimCard, TwoToneSimCard)
