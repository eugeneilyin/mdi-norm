import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDehaze } from './FilledDehaze';
import { OutlineDehaze } from './OutlineDehaze';
import { RoundDehaze } from './RoundDehaze';
import { SharpDehaze } from './SharpDehaze';
import { TwoToneDehaze } from './TwoToneDehaze';
export var Dehaze =
/*#__PURE__*/
function Dehaze(props) {
  return createThemedIcon(props, FilledDehaze, OutlineDehaze, RoundDehaze, SharpDehaze, TwoToneDehaze);
};