import { createThemedIcon } from './utils/createThemedIcon'
import { IconContactsFilled } from './IconContactsFilled'
import { IconContactsOutlined } from './IconContactsOutlined'
import { IconContactsRounded } from './IconContactsRounded'
import { IconContactsSharp } from './IconContactsSharp'
import { IconContactsTwoTone } from './IconContactsTwoTone'

export const IconContacts = /*#__PURE__*/ props =>
  createThemedIcon(props, IconContactsFilled, IconContactsOutlined, IconContactsRounded, IconContactsSharp, IconContactsTwoTone)
