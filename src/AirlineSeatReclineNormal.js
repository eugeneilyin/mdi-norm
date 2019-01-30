import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAirlineSeatReclineNormal } from './FilledAirlineSeatReclineNormal'
import { OutlineAirlineSeatReclineNormal } from './OutlineAirlineSeatReclineNormal'
import { RoundAirlineSeatReclineNormal } from './RoundAirlineSeatReclineNormal'
import { SharpAirlineSeatReclineNormal } from './SharpAirlineSeatReclineNormal'
import { TwoToneAirlineSeatReclineNormal } from './TwoToneAirlineSeatReclineNormal'

export const AirlineSeatReclineNormal = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAirlineSeatReclineNormal, OutlineAirlineSeatReclineNormal, RoundAirlineSeatReclineNormal, SharpAirlineSeatReclineNormal, TwoToneAirlineSeatReclineNormal)
