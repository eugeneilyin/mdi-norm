import { createThemedIcon } from './utils/createThemedIcon';
import { FilledInput } from './FilledInput';
import { OutlineInput } from './OutlineInput';
import { RoundInput } from './RoundInput';
import { SharpInput } from './SharpInput';
import { TwoToneInput } from './TwoToneInput';
export var Input =
/*#__PURE__*/
function Input(props) {
  return createThemedIcon(props, FilledInput, OutlineInput, RoundInput, SharpInput, TwoToneInput);
};