import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSyncDisabled } from './FilledSyncDisabled';
import { OutlineSyncDisabled } from './OutlineSyncDisabled';
import { RoundSyncDisabled } from './RoundSyncDisabled';
import { SharpSyncDisabled } from './SharpSyncDisabled';
import { TwoToneSyncDisabled } from './TwoToneSyncDisabled';
export var SyncDisabled =
/*#__PURE__*/
function SyncDisabled(props) {
  return createThemedIcon(props, FilledSyncDisabled, OutlineSyncDisabled, RoundSyncDisabled, SharpSyncDisabled, TwoToneSyncDisabled);
};