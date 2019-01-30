import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRedeem } from './FilledRedeem';
import { OutlineRedeem } from './OutlineRedeem';
import { RoundRedeem } from './RoundRedeem';
import { SharpRedeem } from './SharpRedeem';
import { TwoToneRedeem } from './TwoToneRedeem';
export var Redeem =
/*#__PURE__*/
function Redeem(props) {
  return createThemedIcon(props, FilledRedeem, OutlineRedeem, RoundRedeem, SharpRedeem, TwoToneRedeem);
};