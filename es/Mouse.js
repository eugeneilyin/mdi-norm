import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMouse } from './FilledMouse';
import { OutlineMouse } from './OutlineMouse';
import { RoundMouse } from './RoundMouse';
import { SharpMouse } from './SharpMouse';
import { TwoToneMouse } from './TwoToneMouse';
export var Mouse =
/*#__PURE__*/
function Mouse(props) {
  return createThemedIcon(props, FilledMouse, OutlineMouse, RoundMouse, SharpMouse, TwoToneMouse);
};