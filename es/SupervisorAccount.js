import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSupervisorAccount } from './FilledSupervisorAccount';
import { OutlineSupervisorAccount } from './OutlineSupervisorAccount';
import { RoundSupervisorAccount } from './RoundSupervisorAccount';
import { SharpSupervisorAccount } from './SharpSupervisorAccount';
import { TwoToneSupervisorAccount } from './TwoToneSupervisorAccount';
export var SupervisorAccount =
/*#__PURE__*/
function SupervisorAccount(props) {
  return createThemedIcon(props, FilledSupervisorAccount, OutlineSupervisorAccount, RoundSupervisorAccount, SharpSupervisorAccount, TwoToneSupervisorAccount);
};