import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAirlineSeatReclineExtra } from './FilledAirlineSeatReclineExtra'
import { OutlineAirlineSeatReclineExtra } from './OutlineAirlineSeatReclineExtra'
import { RoundAirlineSeatReclineExtra } from './RoundAirlineSeatReclineExtra'
import { SharpAirlineSeatReclineExtra } from './SharpAirlineSeatReclineExtra'
import { TwoToneAirlineSeatReclineExtra } from './TwoToneAirlineSeatReclineExtra'

export const AirlineSeatReclineExtra = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAirlineSeatReclineExtra, OutlineAirlineSeatReclineExtra, RoundAirlineSeatReclineExtra, SharpAirlineSeatReclineExtra, TwoToneAirlineSeatReclineExtra)
