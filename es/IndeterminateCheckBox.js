import { createThemedIcon } from './utils/createThemedIcon';
import { FilledIndeterminateCheckBox } from './FilledIndeterminateCheckBox';
import { OutlineIndeterminateCheckBox } from './OutlineIndeterminateCheckBox';
import { RoundIndeterminateCheckBox } from './RoundIndeterminateCheckBox';
import { SharpIndeterminateCheckBox } from './SharpIndeterminateCheckBox';
import { TwoToneIndeterminateCheckBox } from './TwoToneIndeterminateCheckBox';
export var IndeterminateCheckBox =
/*#__PURE__*/
function IndeterminateCheckBox(props) {
  return createThemedIcon(props, FilledIndeterminateCheckBox, OutlineIndeterminateCheckBox, RoundIndeterminateCheckBox, SharpIndeterminateCheckBox, TwoToneIndeterminateCheckBox);
};