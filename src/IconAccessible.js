import { createThemedIcon } from './utils/createThemedIcon'
import { IconAccessibleFilled } from './IconAccessibleFilled'
import { IconAccessibleOutlined } from './IconAccessibleOutlined'
import { IconAccessibleRounded } from './IconAccessibleRounded'
import { IconAccessibleSharp } from './IconAccessibleSharp'
import { IconAccessibleTwoTone } from './IconAccessibleTwoTone'

export const IconAccessible = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAccessibleFilled, IconAccessibleOutlined, IconAccessibleRounded, IconAccessibleSharp, IconAccessibleTwoTone)
