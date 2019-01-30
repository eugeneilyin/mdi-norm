import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCamera } from './FilledCamera';
import { OutlineCamera } from './OutlineCamera';
import { RoundCamera } from './RoundCamera';
import { SharpCamera } from './SharpCamera';
import { TwoToneCamera } from './TwoToneCamera';
export var Camera =
/*#__PURE__*/
function Camera(props) {
  return createThemedIcon(props, FilledCamera, OutlineCamera, RoundCamera, SharpCamera, TwoToneCamera);
};