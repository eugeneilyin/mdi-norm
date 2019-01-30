import { createThemedIcon } from './utils/createThemedIcon'
import { FilledReplyAll } from './FilledReplyAll'
import { OutlineReplyAll } from './OutlineReplyAll'
import { RoundReplyAll } from './RoundReplyAll'
import { SharpReplyAll } from './SharpReplyAll'
import { TwoToneReplyAll } from './TwoToneReplyAll'

export const ReplyAll = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledReplyAll, OutlineReplyAll, RoundReplyAll, SharpReplyAll, TwoToneReplyAll)
