import { createThemedIcon } from './utils/createThemedIcon'
import { IconTabUnselectedFilled } from './IconTabUnselectedFilled'
import { IconTabUnselectedOutlined } from './IconTabUnselectedOutlined'
import { IconTabUnselectedRounded } from './IconTabUnselectedRounded'
import { IconTabUnselectedSharp } from './IconTabUnselectedSharp'
import { IconTabUnselectedTwoTone } from './IconTabUnselectedTwoTone'

export const IconTabUnselected = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTabUnselectedFilled, IconTabUnselectedOutlined, IconTabUnselectedRounded, IconTabUnselectedSharp, IconTabUnselectedTwoTone)
