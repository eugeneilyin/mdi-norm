import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDirections } from './FilledDirections';
import { OutlineDirections } from './OutlineDirections';
import { RoundDirections } from './RoundDirections';
import { SharpDirections } from './SharpDirections';
import { TwoToneDirections } from './TwoToneDirections';
export var Directions =
/*#__PURE__*/
function Directions(props) {
  return createThemedIcon(props, FilledDirections, OutlineDirections, RoundDirections, SharpDirections, TwoToneDirections);
};