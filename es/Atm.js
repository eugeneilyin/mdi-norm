import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAtm } from './FilledAtm';
import { OutlineAtm } from './OutlineAtm';
import { RoundAtm } from './RoundAtm';
import { SharpAtm } from './SharpAtm';
import { TwoToneAtm } from './TwoToneAtm';
export var Atm =
/*#__PURE__*/
function Atm(props) {
  return createThemedIcon(props, FilledAtm, OutlineAtm, RoundAtm, SharpAtm, TwoToneAtm);
};