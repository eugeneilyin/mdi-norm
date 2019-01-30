import { createThemedIcon } from './utils/createThemedIcon'
import { FilledChildFriendly } from './FilledChildFriendly'
import { OutlineChildFriendly } from './OutlineChildFriendly'
import { RoundChildFriendly } from './RoundChildFriendly'
import { SharpChildFriendly } from './SharpChildFriendly'
import { TwoToneChildFriendly } from './TwoToneChildFriendly'

export const ChildFriendly = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledChildFriendly, OutlineChildFriendly, RoundChildFriendly, SharpChildFriendly, TwoToneChildFriendly)
