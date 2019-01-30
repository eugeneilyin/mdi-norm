import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAirlineSeatIndividualSuite } from './FilledAirlineSeatIndividualSuite'
import { OutlineAirlineSeatIndividualSuite } from './OutlineAirlineSeatIndividualSuite'
import { RoundAirlineSeatIndividualSuite } from './RoundAirlineSeatIndividualSuite'
import { SharpAirlineSeatIndividualSuite } from './SharpAirlineSeatIndividualSuite'
import { TwoToneAirlineSeatIndividualSuite } from './TwoToneAirlineSeatIndividualSuite'

export const AirlineSeatIndividualSuite = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAirlineSeatIndividualSuite, OutlineAirlineSeatIndividualSuite, RoundAirlineSeatIndividualSuite, SharpAirlineSeatIndividualSuite, TwoToneAirlineSeatIndividualSuite)
