import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAirlineSeatIndividualSuite } from './FilledAirlineSeatIndividualSuite';
import { OutlineAirlineSeatIndividualSuite } from './OutlineAirlineSeatIndividualSuite';
import { RoundAirlineSeatIndividualSuite } from './RoundAirlineSeatIndividualSuite';
import { SharpAirlineSeatIndividualSuite } from './SharpAirlineSeatIndividualSuite';
import { TwoToneAirlineSeatIndividualSuite } from './TwoToneAirlineSeatIndividualSuite';
export var AirlineSeatIndividualSuite =
/*#__PURE__*/
function AirlineSeatIndividualSuite(props) {
  return createThemedIcon(props, FilledAirlineSeatIndividualSuite, OutlineAirlineSeatIndividualSuite, RoundAirlineSeatIndividualSuite, SharpAirlineSeatIndividualSuite, TwoToneAirlineSeatIndividualSuite);
};