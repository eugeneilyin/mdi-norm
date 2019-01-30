import { createThemedIcon } from './utils/createThemedIcon';
import { FilledClear } from './FilledClear';
import { OutlineClear } from './OutlineClear';
import { RoundClear } from './RoundClear';
import { SharpClear } from './SharpClear';
import { TwoToneClear } from './TwoToneClear';
export var Clear =
/*#__PURE__*/
function Clear(props) {
  return createThemedIcon(props, FilledClear, OutlineClear, RoundClear, SharpClear, TwoToneClear);
};