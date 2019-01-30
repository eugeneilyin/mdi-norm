import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalTaxi } from './FilledLocalTaxi';
import { OutlineLocalTaxi } from './OutlineLocalTaxi';
import { RoundLocalTaxi } from './RoundLocalTaxi';
import { SharpLocalTaxi } from './SharpLocalTaxi';
import { TwoToneLocalTaxi } from './TwoToneLocalTaxi';
export var LocalTaxi =
/*#__PURE__*/
function LocalTaxi(props) {
  return createThemedIcon(props, FilledLocalTaxi, OutlineLocalTaxi, RoundLocalTaxi, SharpLocalTaxi, TwoToneLocalTaxi);
};