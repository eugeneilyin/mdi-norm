import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAirlineSeatFlat } from './FilledAirlineSeatFlat'
import { OutlineAirlineSeatFlat } from './OutlineAirlineSeatFlat'
import { RoundAirlineSeatFlat } from './RoundAirlineSeatFlat'
import { SharpAirlineSeatFlat } from './SharpAirlineSeatFlat'
import { TwoToneAirlineSeatFlat } from './TwoToneAirlineSeatFlat'

export const AirlineSeatFlat = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAirlineSeatFlat, OutlineAirlineSeatFlat, RoundAirlineSeatFlat, SharpAirlineSeatFlat, TwoToneAirlineSeatFlat)
