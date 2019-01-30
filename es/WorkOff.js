import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWorkOff } from './FilledWorkOff';
import { OutlineWorkOff } from './OutlineWorkOff';
import { RoundWorkOff } from './RoundWorkOff';
import { SharpWorkOff } from './SharpWorkOff';
import { TwoToneWorkOff } from './TwoToneWorkOff';
export var WorkOff =
/*#__PURE__*/
function WorkOff(props) {
  return createThemedIcon(props, FilledWorkOff, OutlineWorkOff, RoundWorkOff, SharpWorkOff, TwoToneWorkOff);
};