import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFace } from './FilledFace';
import { OutlineFace } from './OutlineFace';
import { RoundFace } from './RoundFace';
import { SharpFace } from './SharpFace';
import { TwoToneFace } from './TwoToneFace';
export var Face =
/*#__PURE__*/
function Face(props) {
  return createThemedIcon(props, FilledFace, OutlineFace, RoundFace, SharpFace, TwoToneFace);
};