import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWc } from './FilledWc';
import { OutlineWc } from './OutlineWc';
import { RoundWc } from './RoundWc';
import { SharpWc } from './SharpWc';
import { TwoToneWc } from './TwoToneWc';
export var Wc =
/*#__PURE__*/
function Wc(props) {
  return createThemedIcon(props, FilledWc, OutlineWc, RoundWc, SharpWc, TwoToneWc);
};