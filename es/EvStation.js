import { createThemedIcon } from './utils/createThemedIcon';
import { FilledEvStation } from './FilledEvStation';
import { OutlineEvStation } from './OutlineEvStation';
import { RoundEvStation } from './RoundEvStation';
import { SharpEvStation } from './SharpEvStation';
import { TwoToneEvStation } from './TwoToneEvStation';
export var EvStation =
/*#__PURE__*/
function EvStation(props) {
  return createThemedIcon(props, FilledEvStation, OutlineEvStation, RoundEvStation, SharpEvStation, TwoToneEvStation);
};