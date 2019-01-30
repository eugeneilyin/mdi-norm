import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMotorcycle } from './FilledMotorcycle';
import { OutlineMotorcycle } from './OutlineMotorcycle';
import { RoundMotorcycle } from './RoundMotorcycle';
import { SharpMotorcycle } from './SharpMotorcycle';
import { TwoToneMotorcycle } from './TwoToneMotorcycle';
export var Motorcycle =
/*#__PURE__*/
function Motorcycle(props) {
  return createThemedIcon(props, FilledMotorcycle, OutlineMotorcycle, RoundMotorcycle, SharpMotorcycle, TwoToneMotorcycle);
};