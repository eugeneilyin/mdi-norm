import { createThemedIcon } from './utils/createThemedIcon'
import { FilledInbox } from './FilledInbox'
import { OutlineInbox } from './OutlineInbox'
import { RoundInbox } from './RoundInbox'
import { SharpInbox } from './SharpInbox'
import { TwoToneInbox } from './TwoToneInbox'

export const Inbox = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledInbox, OutlineInbox, RoundInbox, SharpInbox, TwoToneInbox)
