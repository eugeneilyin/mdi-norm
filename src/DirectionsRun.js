import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDirectionsRun } from './FilledDirectionsRun'
import { OutlineDirectionsRun } from './OutlineDirectionsRun'
import { RoundDirectionsRun } from './RoundDirectionsRun'
import { SharpDirectionsRun } from './SharpDirectionsRun'
import { TwoToneDirectionsRun } from './TwoToneDirectionsRun'

export const DirectionsRun = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDirectionsRun, OutlineDirectionsRun, RoundDirectionsRun, SharpDirectionsRun, TwoToneDirectionsRun)
