import { createThemedIcon } from './utils/createThemedIcon'
import { IconExpandMoreFilled } from './IconExpandMoreFilled'
import { IconExpandMoreOutlined } from './IconExpandMoreOutlined'
import { IconExpandMoreRounded } from './IconExpandMoreRounded'
import { IconExpandMoreSharp } from './IconExpandMoreSharp'
import { IconExpandMoreTwoTone } from './IconExpandMoreTwoTone'

export const IconExpandMore = /*#__PURE__*/ props =>
  createThemedIcon(props, IconExpandMoreFilled, IconExpandMoreOutlined, IconExpandMoreRounded, IconExpandMoreSharp, IconExpandMoreTwoTone)
