import { createThemedIcon } from './utils/createThemedIcon'
import { IconDonutLargeFilled } from './IconDonutLargeFilled'
import { IconDonutLargeOutlined } from './IconDonutLargeOutlined'
import { IconDonutLargeRounded } from './IconDonutLargeRounded'
import { IconDonutLargeSharp } from './IconDonutLargeSharp'
import { IconDonutLargeTwoTone } from './IconDonutLargeTwoTone'

export const IconDonutLarge = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDonutLargeFilled, IconDonutLargeOutlined, IconDonutLargeRounded, IconDonutLargeSharp, IconDonutLargeTwoTone)
