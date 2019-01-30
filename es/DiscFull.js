import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDiscFull } from './FilledDiscFull';
import { OutlineDiscFull } from './OutlineDiscFull';
import { RoundDiscFull } from './RoundDiscFull';
import { SharpDiscFull } from './SharpDiscFull';
import { TwoToneDiscFull } from './TwoToneDiscFull';
export var DiscFull =
/*#__PURE__*/
function DiscFull(props) {
  return createThemedIcon(props, FilledDiscFull, OutlineDiscFull, RoundDiscFull, SharpDiscFull, TwoToneDiscFull);
};