import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAirlineSeatFlatAngled } from './FilledAirlineSeatFlatAngled'
import { OutlineAirlineSeatFlatAngled } from './OutlineAirlineSeatFlatAngled'
import { RoundAirlineSeatFlatAngled } from './RoundAirlineSeatFlatAngled'
import { SharpAirlineSeatFlatAngled } from './SharpAirlineSeatFlatAngled'
import { TwoToneAirlineSeatFlatAngled } from './TwoToneAirlineSeatFlatAngled'

export const AirlineSeatFlatAngled = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAirlineSeatFlatAngled, OutlineAirlineSeatFlatAngled, RoundAirlineSeatFlatAngled, SharpAirlineSeatFlatAngled, TwoToneAirlineSeatFlatAngled)
