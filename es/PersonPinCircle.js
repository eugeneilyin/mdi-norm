import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPersonPinCircle } from './FilledPersonPinCircle';
import { OutlinePersonPinCircle } from './OutlinePersonPinCircle';
import { RoundPersonPinCircle } from './RoundPersonPinCircle';
import { SharpPersonPinCircle } from './SharpPersonPinCircle';
import { TwoTonePersonPinCircle } from './TwoTonePersonPinCircle';
export var PersonPinCircle =
/*#__PURE__*/
function PersonPinCircle(props) {
  return createThemedIcon(props, FilledPersonPinCircle, OutlinePersonPinCircle, RoundPersonPinCircle, SharpPersonPinCircle, TwoTonePersonPinCircle);
};