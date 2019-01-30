import { createThemedIcon } from './utils/createThemedIcon';
import { FilledEject } from './FilledEject';
import { OutlineEject } from './OutlineEject';
import { RoundEject } from './RoundEject';
import { SharpEject } from './SharpEject';
import { TwoToneEject } from './TwoToneEject';
export var Eject =
/*#__PURE__*/
function Eject(props) {
  return createThemedIcon(props, FilledEject, OutlineEject, RoundEject, SharpEject, TwoToneEject);
};