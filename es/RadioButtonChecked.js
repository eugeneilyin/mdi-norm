import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRadioButtonChecked } from './FilledRadioButtonChecked';
import { OutlineRadioButtonChecked } from './OutlineRadioButtonChecked';
import { RoundRadioButtonChecked } from './RoundRadioButtonChecked';
import { SharpRadioButtonChecked } from './SharpRadioButtonChecked';
import { TwoToneRadioButtonChecked } from './TwoToneRadioButtonChecked';
export var RadioButtonChecked =
/*#__PURE__*/
function RadioButtonChecked(props) {
  return createThemedIcon(props, FilledRadioButtonChecked, OutlineRadioButtonChecked, RoundRadioButtonChecked, SharpRadioButtonChecked, TwoToneRadioButtonChecked);
};