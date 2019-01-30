import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLaptopWindows } from './FilledLaptopWindows';
import { OutlineLaptopWindows } from './OutlineLaptopWindows';
import { RoundLaptopWindows } from './RoundLaptopWindows';
import { SharpLaptopWindows } from './SharpLaptopWindows';
import { TwoToneLaptopWindows } from './TwoToneLaptopWindows';
export var LaptopWindows =
/*#__PURE__*/
function LaptopWindows(props) {
  return createThemedIcon(props, FilledLaptopWindows, OutlineLaptopWindows, RoundLaptopWindows, SharpLaptopWindows, TwoToneLaptopWindows);
};