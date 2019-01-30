import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalAirport } from './FilledLocalAirport'
import { OutlineLocalAirport } from './OutlineLocalAirport'
import { RoundLocalAirport } from './RoundLocalAirport'
import { SharpLocalAirport } from './SharpLocalAirport'
import { TwoToneLocalAirport } from './TwoToneLocalAirport'

export const LocalAirport = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalAirport, OutlineLocalAirport, RoundLocalAirport, SharpLocalAirport, TwoToneLocalAirport)
