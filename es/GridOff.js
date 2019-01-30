import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGridOff } from './FilledGridOff';
import { OutlineGridOff } from './OutlineGridOff';
import { RoundGridOff } from './RoundGridOff';
import { SharpGridOff } from './SharpGridOff';
import { TwoToneGridOff } from './TwoToneGridOff';
export var GridOff =
/*#__PURE__*/
function GridOff(props) {
  return createThemedIcon(props, FilledGridOff, OutlineGridOff, RoundGridOff, SharpGridOff, TwoToneGridOff);
};