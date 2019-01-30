import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTablet } from './FilledTablet';
import { OutlineTablet } from './OutlineTablet';
import { RoundTablet } from './RoundTablet';
import { SharpTablet } from './SharpTablet';
import { TwoToneTablet } from './TwoToneTablet';
export var Tablet =
/*#__PURE__*/
function Tablet(props) {
  return createThemedIcon(props, FilledTablet, OutlineTablet, RoundTablet, SharpTablet, TwoToneTablet);
};