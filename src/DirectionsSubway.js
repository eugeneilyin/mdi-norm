import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDirectionsSubway } from './FilledDirectionsSubway'
import { OutlineDirectionsSubway } from './OutlineDirectionsSubway'
import { RoundDirectionsSubway } from './RoundDirectionsSubway'
import { SharpDirectionsSubway } from './SharpDirectionsSubway'
import { TwoToneDirectionsSubway } from './TwoToneDirectionsSubway'

export const DirectionsSubway = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDirectionsSubway, OutlineDirectionsSubway, RoundDirectionsSubway, SharpDirectionsSubway, TwoToneDirectionsSubway)
