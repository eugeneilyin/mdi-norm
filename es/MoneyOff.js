import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMoneyOff } from './FilledMoneyOff';
import { OutlineMoneyOff } from './OutlineMoneyOff';
import { RoundMoneyOff } from './RoundMoneyOff';
import { SharpMoneyOff } from './SharpMoneyOff';
import { TwoToneMoneyOff } from './TwoToneMoneyOff';
export var MoneyOff =
/*#__PURE__*/
function MoneyOff(props) {
  return createThemedIcon(props, FilledMoneyOff, OutlineMoneyOff, RoundMoneyOff, SharpMoneyOff, TwoToneMoneyOff);
};