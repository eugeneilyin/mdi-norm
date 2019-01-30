import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFlightLand } from './FilledFlightLand'
import { OutlineFlightLand } from './OutlineFlightLand'
import { RoundFlightLand } from './RoundFlightLand'
import { SharpFlightLand } from './SharpFlightLand'
import { TwoToneFlightLand } from './TwoToneFlightLand'

export const FlightLand = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFlightLand, OutlineFlightLand, RoundFlightLand, SharpFlightLand, TwoToneFlightLand)
