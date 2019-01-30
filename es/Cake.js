import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCake } from './FilledCake';
import { OutlineCake } from './OutlineCake';
import { RoundCake } from './RoundCake';
import { SharpCake } from './SharpCake';
import { TwoToneCake } from './TwoToneCake';
export var Cake =
/*#__PURE__*/
function Cake(props) {
  return createThemedIcon(props, FilledCake, OutlineCake, RoundCake, SharpCake, TwoToneCake);
};