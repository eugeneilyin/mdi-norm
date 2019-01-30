import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewQuilt } from './FilledViewQuilt';
import { OutlineViewQuilt } from './OutlineViewQuilt';
import { RoundViewQuilt } from './RoundViewQuilt';
import { SharpViewQuilt } from './SharpViewQuilt';
import { TwoToneViewQuilt } from './TwoToneViewQuilt';
export var ViewQuilt =
/*#__PURE__*/
function ViewQuilt(props) {
  return createThemedIcon(props, FilledViewQuilt, OutlineViewQuilt, RoundViewQuilt, SharpViewQuilt, TwoToneViewQuilt);
};