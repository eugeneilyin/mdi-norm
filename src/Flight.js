import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFlight } from './FilledFlight'
import { OutlineFlight } from './OutlineFlight'
import { RoundFlight } from './RoundFlight'
import { SharpFlight } from './SharpFlight'
import { TwoToneFlight } from './TwoToneFlight'

export const Flight = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFlight, OutlineFlight, RoundFlight, SharpFlight, TwoToneFlight)
