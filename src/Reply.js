import { createThemedIcon } from './utils/createThemedIcon'
import { FilledReply } from './FilledReply'
import { OutlineReply } from './OutlineReply'
import { RoundReply } from './RoundReply'
import { SharpReply } from './SharpReply'
import { TwoToneReply } from './TwoToneReply'

export const Reply = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledReply, OutlineReply, RoundReply, SharpReply, TwoToneReply)
