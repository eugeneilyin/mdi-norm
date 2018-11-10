import { createThemedIcon } from './utils/createThemedIcon'
import { IconTabletFilled } from './IconTabletFilled'
import { IconTabletOutlined } from './IconTabletOutlined'
import { IconTabletRounded } from './IconTabletRounded'
import { IconTabletSharp } from './IconTabletSharp'
import { IconTabletTwoTone } from './IconTabletTwoTone'

export const IconTablet = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTabletFilled, IconTabletOutlined, IconTabletRounded, IconTabletSharp, IconTabletTwoTone)
