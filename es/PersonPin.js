import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPersonPin } from './FilledPersonPin';
import { OutlinePersonPin } from './OutlinePersonPin';
import { RoundPersonPin } from './RoundPersonPin';
import { SharpPersonPin } from './SharpPersonPin';
import { TwoTonePersonPin } from './TwoTonePersonPin';
export var PersonPin =
/*#__PURE__*/
function PersonPin(props) {
  return createThemedIcon(props, FilledPersonPin, OutlinePersonPin, RoundPersonPin, SharpPersonPin, TwoTonePersonPin);
};