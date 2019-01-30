import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCreditCard } from './FilledCreditCard';
import { OutlineCreditCard } from './OutlineCreditCard';
import { RoundCreditCard } from './RoundCreditCard';
import { SharpCreditCard } from './SharpCreditCard';
import { TwoToneCreditCard } from './TwoToneCreditCard';
export var CreditCard =
/*#__PURE__*/
function CreditCard(props) {
  return createThemedIcon(props, FilledCreditCard, OutlineCreditCard, RoundCreditCard, SharpCreditCard, TwoToneCreditCard);
};