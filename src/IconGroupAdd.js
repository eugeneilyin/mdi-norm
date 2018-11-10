import { createThemedIcon } from './utils/createThemedIcon'
import { IconGroupAddFilled } from './IconGroupAddFilled'
import { IconGroupAddOutlined } from './IconGroupAddOutlined'
import { IconGroupAddRounded } from './IconGroupAddRounded'
import { IconGroupAddSharp } from './IconGroupAddSharp'
import { IconGroupAddTwoTone } from './IconGroupAddTwoTone'

export const IconGroupAdd = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGroupAddFilled, IconGroupAddOutlined, IconGroupAddRounded, IconGroupAddSharp, IconGroupAddTwoTone)
