import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAccountBalanceWallet } from './FilledAccountBalanceWallet';
import { OutlineAccountBalanceWallet } from './OutlineAccountBalanceWallet';
import { RoundAccountBalanceWallet } from './RoundAccountBalanceWallet';
import { SharpAccountBalanceWallet } from './SharpAccountBalanceWallet';
import { TwoToneAccountBalanceWallet } from './TwoToneAccountBalanceWallet';
export var AccountBalanceWallet =
/*#__PURE__*/
function AccountBalanceWallet(props) {
  return createThemedIcon(props, FilledAccountBalanceWallet, OutlineAccountBalanceWallet, RoundAccountBalanceWallet, SharpAccountBalanceWallet, TwoToneAccountBalanceWallet);
};