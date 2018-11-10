import { createThemedIcon } from './utils/createThemedIcon'
import { IconListFilled } from './IconListFilled'
import { IconListOutlined } from './IconListOutlined'
import { IconListRounded } from './IconListRounded'
import { IconListSharp } from './IconListSharp'
import { IconListTwoTone } from './IconListTwoTone'

export const IconList = /*#__PURE__*/ props =>
  createThemedIcon(props, IconListFilled, IconListOutlined, IconListRounded, IconListSharp, IconListTwoTone)
