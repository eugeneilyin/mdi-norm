import { createThemedIcon } from './utils/createThemedIcon'
import { IconAddFilled } from './IconAddFilled'
import { IconAddOutlined } from './IconAddOutlined'
import { IconAddRounded } from './IconAddRounded'
import { IconAddSharp } from './IconAddSharp'
import { IconAddTwoTone } from './IconAddTwoTone'

export const IconAdd = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAddFilled, IconAddOutlined, IconAddRounded, IconAddSharp, IconAddTwoTone)
