import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAirportShuttle } from './FilledAirportShuttle'
import { OutlineAirportShuttle } from './OutlineAirportShuttle'
import { RoundAirportShuttle } from './RoundAirportShuttle'
import { SharpAirportShuttle } from './SharpAirportShuttle'
import { TwoToneAirportShuttle } from './TwoToneAirportShuttle'

export const AirportShuttle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAirportShuttle, OutlineAirportShuttle, RoundAirportShuttle, SharpAirportShuttle, TwoToneAirportShuttle)
