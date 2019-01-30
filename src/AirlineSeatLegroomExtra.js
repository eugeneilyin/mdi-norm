import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAirlineSeatLegroomExtra } from './FilledAirlineSeatLegroomExtra'
import { OutlineAirlineSeatLegroomExtra } from './OutlineAirlineSeatLegroomExtra'
import { RoundAirlineSeatLegroomExtra } from './RoundAirlineSeatLegroomExtra'
import { SharpAirlineSeatLegroomExtra } from './SharpAirlineSeatLegroomExtra'
import { TwoToneAirlineSeatLegroomExtra } from './TwoToneAirlineSeatLegroomExtra'

export const AirlineSeatLegroomExtra = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAirlineSeatLegroomExtra, OutlineAirlineSeatLegroomExtra, RoundAirlineSeatLegroomExtra, SharpAirlineSeatLegroomExtra, TwoToneAirlineSeatLegroomExtra)
