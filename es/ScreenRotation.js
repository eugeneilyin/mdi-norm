import { createThemedIcon } from './utils/createThemedIcon';
import { FilledScreenRotation } from './FilledScreenRotation';
import { OutlineScreenRotation } from './OutlineScreenRotation';
import { RoundScreenRotation } from './RoundScreenRotation';
import { SharpScreenRotation } from './SharpScreenRotation';
import { TwoToneScreenRotation } from './TwoToneScreenRotation';
export var ScreenRotation =
/*#__PURE__*/
function ScreenRotation(props) {
  return createThemedIcon(props, FilledScreenRotation, OutlineScreenRotation, RoundScreenRotation, SharpScreenRotation, TwoToneScreenRotation);
};