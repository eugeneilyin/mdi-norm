import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCommute } from './FilledCommute';
import { OutlineCommute } from './OutlineCommute';
import { RoundCommute } from './RoundCommute';
import { SharpCommute } from './SharpCommute';
import { TwoToneCommute } from './TwoToneCommute';
export var Commute =
/*#__PURE__*/
function Commute(props) {
  return createThemedIcon(props, FilledCommute, OutlineCommute, RoundCommute, SharpCommute, TwoToneCommute);
};