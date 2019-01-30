import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRadio } from './FilledRadio';
import { OutlineRadio } from './OutlineRadio';
import { RoundRadio } from './RoundRadio';
import { SharpRadio } from './SharpRadio';
import { TwoToneRadio } from './TwoToneRadio';
export var Radio =
/*#__PURE__*/
function Radio(props) {
  return createThemedIcon(props, FilledRadio, OutlineRadio, RoundRadio, SharpRadio, TwoToneRadio);
};