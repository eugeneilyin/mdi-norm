import { createThemedIcon } from './utils/createThemedIcon'
import { IconMoreFilled } from './IconMoreFilled'
import { IconMoreOutlined } from './IconMoreOutlined'
import { IconMoreRounded } from './IconMoreRounded'
import { IconMoreSharp } from './IconMoreSharp'
import { IconMoreTwoTone } from './IconMoreTwoTone'

export const IconMore = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMoreFilled, IconMoreOutlined, IconMoreRounded, IconMoreSharp, IconMoreTwoTone)
