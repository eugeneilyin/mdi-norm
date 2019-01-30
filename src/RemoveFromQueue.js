import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRemoveFromQueue } from './FilledRemoveFromQueue'
import { OutlineRemoveFromQueue } from './OutlineRemoveFromQueue'
import { RoundRemoveFromQueue } from './RoundRemoveFromQueue'
import { SharpRemoveFromQueue } from './SharpRemoveFromQueue'
import { TwoToneRemoveFromQueue } from './TwoToneRemoveFromQueue'

export const RemoveFromQueue = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRemoveFromQueue, OutlineRemoveFromQueue, RoundRemoveFromQueue, SharpRemoveFromQueue, TwoToneRemoveFromQueue)
