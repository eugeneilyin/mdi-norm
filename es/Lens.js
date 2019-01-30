import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLens } from './FilledLens';
import { OutlineLens } from './OutlineLens';
import { RoundLens } from './RoundLens';
import { SharpLens } from './SharpLens';
import { TwoToneLens } from './TwoToneLens';
export var Lens =
/*#__PURE__*/
function Lens(props) {
  return createThemedIcon(props, FilledLens, OutlineLens, RoundLens, SharpLens, TwoToneLens);
};