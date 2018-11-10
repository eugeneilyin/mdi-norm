import { createThemedIcon } from './utils/createThemedIcon'
import { IconTrafficFilled } from './IconTrafficFilled'
import { IconTrafficOutlined } from './IconTrafficOutlined'
import { IconTrafficRounded } from './IconTrafficRounded'
import { IconTrafficSharp } from './IconTrafficSharp'
import { IconTrafficTwoTone } from './IconTrafficTwoTone'

export const IconTraffic = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTrafficFilled, IconTrafficOutlined, IconTrafficRounded, IconTrafficSharp, IconTrafficTwoTone)
