import { createThemedIcon } from './utils/createThemedIcon'
import { IconCakeFilled } from './IconCakeFilled'
import { IconCakeOutlined } from './IconCakeOutlined'
import { IconCakeRounded } from './IconCakeRounded'
import { IconCakeSharp } from './IconCakeSharp'
import { IconCakeTwoTone } from './IconCakeTwoTone'

export const IconCake = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCakeFilled, IconCakeOutlined, IconCakeRounded, IconCakeSharp, IconCakeTwoTone)
