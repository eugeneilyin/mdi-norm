import { createThemedIcon } from './utils/createThemedIcon'
import { IconPersonAddFilled } from './IconPersonAddFilled'
import { IconPersonAddOutlined } from './IconPersonAddOutlined'
import { IconPersonAddRounded } from './IconPersonAddRounded'
import { IconPersonAddSharp } from './IconPersonAddSharp'
import { IconPersonAddTwoTone } from './IconPersonAddTwoTone'

export const IconPersonAdd = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPersonAddFilled, IconPersonAddOutlined, IconPersonAddRounded, IconPersonAddSharp, IconPersonAddTwoTone)
