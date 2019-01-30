import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDirectionsTransit } from './FilledDirectionsTransit'
import { OutlineDirectionsTransit } from './OutlineDirectionsTransit'
import { RoundDirectionsTransit } from './RoundDirectionsTransit'
import { SharpDirectionsTransit } from './SharpDirectionsTransit'
import { TwoToneDirectionsTransit } from './TwoToneDirectionsTransit'

export const DirectionsTransit = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDirectionsTransit, OutlineDirectionsTransit, RoundDirectionsTransit, SharpDirectionsTransit, TwoToneDirectionsTransit)
