import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSyncProblem } from './FilledSyncProblem';
import { OutlineSyncProblem } from './OutlineSyncProblem';
import { RoundSyncProblem } from './RoundSyncProblem';
import { SharpSyncProblem } from './SharpSyncProblem';
import { TwoToneSyncProblem } from './TwoToneSyncProblem';
export var SyncProblem =
/*#__PURE__*/
function SyncProblem(props) {
  return createThemedIcon(props, FilledSyncProblem, OutlineSyncProblem, RoundSyncProblem, SharpSyncProblem, TwoToneSyncProblem);
};