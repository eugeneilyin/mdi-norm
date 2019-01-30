import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRotateLeft } from './FilledRotateLeft';
import { OutlineRotateLeft } from './OutlineRotateLeft';
import { RoundRotateLeft } from './RoundRotateLeft';
import { SharpRotateLeft } from './SharpRotateLeft';
import { TwoToneRotateLeft } from './TwoToneRotateLeft';
export var RotateLeft =
/*#__PURE__*/
function RotateLeft(props) {
  return createThemedIcon(props, FilledRotateLeft, OutlineRotateLeft, RoundRotateLeft, SharpRotateLeft, TwoToneRotateLeft);
};