import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSyncDisabled } from './FilledSyncDisabled'
import { OutlineSyncDisabled } from './OutlineSyncDisabled'
import { RoundSyncDisabled } from './RoundSyncDisabled'
import { SharpSyncDisabled } from './SharpSyncDisabled'
import { TwoToneSyncDisabled } from './TwoToneSyncDisabled'

export const SyncDisabled = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSyncDisabled, OutlineSyncDisabled, RoundSyncDisabled, SharpSyncDisabled, TwoToneSyncDisabled)
