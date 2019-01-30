import { createThemedIcon } from './utils/createThemedIcon'
import { FilledQueuePlayNext } from './FilledQueuePlayNext'
import { OutlineQueuePlayNext } from './OutlineQueuePlayNext'
import { RoundQueuePlayNext } from './RoundQueuePlayNext'
import { SharpQueuePlayNext } from './SharpQueuePlayNext'
import { TwoToneQueuePlayNext } from './TwoToneQueuePlayNext'

export const QueuePlayNext = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledQueuePlayNext, OutlineQueuePlayNext, RoundQueuePlayNext, SharpQueuePlayNext, TwoToneQueuePlayNext)
