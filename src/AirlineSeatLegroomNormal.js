import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAirlineSeatLegroomNormal } from './FilledAirlineSeatLegroomNormal'
import { OutlineAirlineSeatLegroomNormal } from './OutlineAirlineSeatLegroomNormal'
import { RoundAirlineSeatLegroomNormal } from './RoundAirlineSeatLegroomNormal'
import { SharpAirlineSeatLegroomNormal } from './SharpAirlineSeatLegroomNormal'
import { TwoToneAirlineSeatLegroomNormal } from './TwoToneAirlineSeatLegroomNormal'

export const AirlineSeatLegroomNormal = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAirlineSeatLegroomNormal, OutlineAirlineSeatLegroomNormal, RoundAirlineSeatLegroomNormal, SharpAirlineSeatLegroomNormal, TwoToneAirlineSeatLegroomNormal)
