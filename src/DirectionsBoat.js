import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDirectionsBoat } from './FilledDirectionsBoat'
import { OutlineDirectionsBoat } from './OutlineDirectionsBoat'
import { RoundDirectionsBoat } from './RoundDirectionsBoat'
import { SharpDirectionsBoat } from './SharpDirectionsBoat'
import { TwoToneDirectionsBoat } from './TwoToneDirectionsBoat'

export const DirectionsBoat = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDirectionsBoat, OutlineDirectionsBoat, RoundDirectionsBoat, SharpDirectionsBoat, TwoToneDirectionsBoat)
