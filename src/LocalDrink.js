import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalDrink } from './FilledLocalDrink'
import { OutlineLocalDrink } from './OutlineLocalDrink'
import { RoundLocalDrink } from './RoundLocalDrink'
import { SharpLocalDrink } from './SharpLocalDrink'
import { TwoToneLocalDrink } from './TwoToneLocalDrink'

export const LocalDrink = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalDrink, OutlineLocalDrink, RoundLocalDrink, SharpLocalDrink, TwoToneLocalDrink)
