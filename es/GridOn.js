import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGridOn } from './FilledGridOn';
import { OutlineGridOn } from './OutlineGridOn';
import { RoundGridOn } from './RoundGridOn';
import { SharpGridOn } from './SharpGridOn';
import { TwoToneGridOn } from './TwoToneGridOn';
export var GridOn =
/*#__PURE__*/
function GridOn(props) {
  return createThemedIcon(props, FilledGridOn, OutlineGridOn, RoundGridOn, SharpGridOn, TwoToneGridOn);
};