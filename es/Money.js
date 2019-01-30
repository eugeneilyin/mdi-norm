import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMoney } from './FilledMoney';
import { OutlineMoney } from './OutlineMoney';
import { RoundMoney } from './RoundMoney';
import { SharpMoney } from './SharpMoney';
import { TwoToneMoney } from './TwoToneMoney';
export var Money =
/*#__PURE__*/
function Money(props) {
  return createThemedIcon(props, FilledMoney, OutlineMoney, RoundMoney, SharpMoney, TwoToneMoney);
};