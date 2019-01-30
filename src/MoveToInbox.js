import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMoveToInbox } from './FilledMoveToInbox'
import { OutlineMoveToInbox } from './OutlineMoveToInbox'
import { RoundMoveToInbox } from './RoundMoveToInbox'
import { SharpMoveToInbox } from './SharpMoveToInbox'
import { TwoToneMoveToInbox } from './TwoToneMoveToInbox'

export const MoveToInbox = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMoveToInbox, OutlineMoveToInbox, RoundMoveToInbox, SharpMoveToInbox, TwoToneMoveToInbox)
