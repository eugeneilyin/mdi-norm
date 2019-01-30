import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCheckBox } from './FilledCheckBox';
import { OutlineCheckBox } from './OutlineCheckBox';
import { RoundCheckBox } from './RoundCheckBox';
import { SharpCheckBox } from './SharpCheckBox';
import { TwoToneCheckBox } from './TwoToneCheckBox';
export var CheckBox =
/*#__PURE__*/
function CheckBox(props) {
  return createThemedIcon(props, FilledCheckBox, OutlineCheckBox, RoundCheckBox, SharpCheckBox, TwoToneCheckBox);
};