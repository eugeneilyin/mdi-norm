import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTextFields } from './FilledTextFields';
import { OutlineTextFields } from './OutlineTextFields';
import { RoundTextFields } from './RoundTextFields';
import { SharpTextFields } from './SharpTextFields';
import { TwoToneTextFields } from './TwoToneTextFields';
export var TextFields =
/*#__PURE__*/
function TextFields(props) {
  return createThemedIcon(props, FilledTextFields, OutlineTextFields, RoundTextFields, SharpTextFields, TwoToneTextFields);
};