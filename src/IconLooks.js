import { createThemedIcon } from './utils/createThemedIcon'
import { IconLooksFilled } from './IconLooksFilled'
import { IconLooksOutlined } from './IconLooksOutlined'
import { IconLooksRounded } from './IconLooksRounded'
import { IconLooksSharp } from './IconLooksSharp'
import { IconLooksTwoTone } from './IconLooksTwoTone'

export const IconLooks = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLooksFilled, IconLooksOutlined, IconLooksRounded, IconLooksSharp, IconLooksTwoTone)
