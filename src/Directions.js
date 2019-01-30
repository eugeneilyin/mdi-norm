import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDirections } from './FilledDirections'
import { OutlineDirections } from './OutlineDirections'
import { RoundDirections } from './RoundDirections'
import { SharpDirections } from './SharpDirections'
import { TwoToneDirections } from './TwoToneDirections'

export const Directions = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDirections, OutlineDirections, RoundDirections, SharpDirections, TwoToneDirections)
