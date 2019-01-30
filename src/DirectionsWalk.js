import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDirectionsWalk } from './FilledDirectionsWalk'
import { OutlineDirectionsWalk } from './OutlineDirectionsWalk'
import { RoundDirectionsWalk } from './RoundDirectionsWalk'
import { SharpDirectionsWalk } from './SharpDirectionsWalk'
import { TwoToneDirectionsWalk } from './TwoToneDirectionsWalk'

export const DirectionsWalk = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDirectionsWalk, OutlineDirectionsWalk, RoundDirectionsWalk, SharpDirectionsWalk, TwoToneDirectionsWalk)
