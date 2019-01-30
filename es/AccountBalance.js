import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAccountBalance } from './FilledAccountBalance';
import { OutlineAccountBalance } from './OutlineAccountBalance';
import { RoundAccountBalance } from './RoundAccountBalance';
import { SharpAccountBalance } from './SharpAccountBalance';
import { TwoToneAccountBalance } from './TwoToneAccountBalance';
export var AccountBalance =
/*#__PURE__*/
function AccountBalance(props) {
  return createThemedIcon(props, FilledAccountBalance, OutlineAccountBalance, RoundAccountBalance, SharpAccountBalance, TwoToneAccountBalance);
};