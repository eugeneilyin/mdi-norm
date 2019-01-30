import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDirectionsRailway } from './FilledDirectionsRailway'
import { OutlineDirectionsRailway } from './OutlineDirectionsRailway'
import { RoundDirectionsRailway } from './RoundDirectionsRailway'
import { SharpDirectionsRailway } from './SharpDirectionsRailway'
import { TwoToneDirectionsRailway } from './TwoToneDirectionsRailway'

export const DirectionsRailway = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDirectionsRailway, OutlineDirectionsRailway, RoundDirectionsRailway, SharpDirectionsRailway, TwoToneDirectionsRailway)
