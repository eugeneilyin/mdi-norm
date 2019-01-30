import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTabUnselected } from './FilledTabUnselected';
import { OutlineTabUnselected } from './OutlineTabUnselected';
import { RoundTabUnselected } from './RoundTabUnselected';
import { SharpTabUnselected } from './SharpTabUnselected';
import { TwoToneTabUnselected } from './TwoToneTabUnselected';
export var TabUnselected =
/*#__PURE__*/
function TabUnselected(props) {
  return createThemedIcon(props, FilledTabUnselected, OutlineTabUnselected, RoundTabUnselected, SharpTabUnselected, TwoToneTabUnselected);
};