import { createThemedIcon } from './utils/createThemedIcon'
import { IconTurnedInFilled } from './IconTurnedInFilled'
import { IconTurnedInOutlined } from './IconTurnedInOutlined'
import { IconTurnedInRounded } from './IconTurnedInRounded'
import { IconTurnedInSharp } from './IconTurnedInSharp'
import { IconTurnedInTwoTone } from './IconTurnedInTwoTone'

export const IconTurnedIn = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTurnedInFilled, IconTurnedInOutlined, IconTurnedInRounded, IconTurnedInSharp, IconTurnedInTwoTone)
