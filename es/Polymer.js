import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPolymer } from './FilledPolymer';
import { OutlinePolymer } from './OutlinePolymer';
import { RoundPolymer } from './RoundPolymer';
import { SharpPolymer } from './SharpPolymer';
import { TwoTonePolymer } from './TwoTonePolymer';
export var Polymer =
/*#__PURE__*/
function Polymer(props) {
  return createThemedIcon(props, FilledPolymer, OutlinePolymer, RoundPolymer, SharpPolymer, TwoTonePolymer);
};