import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalGasStation } from './FilledLocalGasStation';
import { OutlineLocalGasStation } from './OutlineLocalGasStation';
import { RoundLocalGasStation } from './RoundLocalGasStation';
import { SharpLocalGasStation } from './SharpLocalGasStation';
import { TwoToneLocalGasStation } from './TwoToneLocalGasStation';
export var LocalGasStation =
/*#__PURE__*/
function LocalGasStation(props) {
  return createThemedIcon(props, FilledLocalGasStation, OutlineLocalGasStation, RoundLocalGasStation, SharpLocalGasStation, TwoToneLocalGasStation);
};