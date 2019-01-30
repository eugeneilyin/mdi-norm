import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFlightTakeoff } from './FilledFlightTakeoff'
import { OutlineFlightTakeoff } from './OutlineFlightTakeoff'
import { RoundFlightTakeoff } from './RoundFlightTakeoff'
import { SharpFlightTakeoff } from './SharpFlightTakeoff'
import { TwoToneFlightTakeoff } from './TwoToneFlightTakeoff'

export const FlightTakeoff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFlightTakeoff, OutlineFlightTakeoff, RoundFlightTakeoff, SharpFlightTakeoff, TwoToneFlightTakeoff)
