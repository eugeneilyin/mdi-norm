import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTonality } from './FilledTonality';
import { OutlineTonality } from './OutlineTonality';
import { RoundTonality } from './RoundTonality';
import { SharpTonality } from './SharpTonality';
import { TwoToneTonality } from './TwoToneTonality';
export var Tonality =
/*#__PURE__*/
function Tonality(props) {
  return createThemedIcon(props, FilledTonality, OutlineTonality, RoundTonality, SharpTonality, TwoToneTonality);
};