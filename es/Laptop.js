import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLaptop } from './FilledLaptop';
import { OutlineLaptop } from './OutlineLaptop';
import { RoundLaptop } from './RoundLaptop';
import { SharpLaptop } from './SharpLaptop';
import { TwoToneLaptop } from './TwoToneLaptop';
export var Laptop =
/*#__PURE__*/
function Laptop(props) {
  return createThemedIcon(props, FilledLaptop, OutlineLaptop, RoundLaptop, SharpLaptop, TwoToneLaptop);
};