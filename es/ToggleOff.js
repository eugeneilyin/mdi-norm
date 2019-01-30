import { createThemedIcon } from './utils/createThemedIcon';
import { FilledToggleOff } from './FilledToggleOff';
import { OutlineToggleOff } from './OutlineToggleOff';
import { RoundToggleOff } from './RoundToggleOff';
import { SharpToggleOff } from './SharpToggleOff';
import { TwoToneToggleOff } from './TwoToneToggleOff';
export var ToggleOff =
/*#__PURE__*/
function ToggleOff(props) {
  return createThemedIcon(props, FilledToggleOff, OutlineToggleOff, RoundToggleOff, SharpToggleOff, TwoToneToggleOff);
};