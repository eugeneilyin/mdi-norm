import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCardTravel } from './FilledCardTravel';
import { OutlineCardTravel } from './OutlineCardTravel';
import { RoundCardTravel } from './RoundCardTravel';
import { SharpCardTravel } from './SharpCardTravel';
import { TwoToneCardTravel } from './TwoToneCardTravel';
export var CardTravel =
/*#__PURE__*/
function CardTravel(props) {
  return createThemedIcon(props, FilledCardTravel, OutlineCardTravel, RoundCardTravel, SharpCardTravel, TwoToneCardTravel);
};