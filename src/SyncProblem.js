import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSyncProblem } from './FilledSyncProblem'
import { OutlineSyncProblem } from './OutlineSyncProblem'
import { RoundSyncProblem } from './RoundSyncProblem'
import { SharpSyncProblem } from './SharpSyncProblem'
import { TwoToneSyncProblem } from './TwoToneSyncProblem'

export const SyncProblem = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSyncProblem, OutlineSyncProblem, RoundSyncProblem, SharpSyncProblem, TwoToneSyncProblem)
