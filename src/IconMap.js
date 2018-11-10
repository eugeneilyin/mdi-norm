import { createThemedIcon } from './utils/createThemedIcon'
import { IconMapFilled } from './IconMapFilled'
import { IconMapOutlined } from './IconMapOutlined'
import { IconMapRounded } from './IconMapRounded'
import { IconMapSharp } from './IconMapSharp'
import { IconMapTwoTone } from './IconMapTwoTone'

export const IconMap = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMapFilled, IconMapOutlined, IconMapRounded, IconMapSharp, IconMapTwoTone)
