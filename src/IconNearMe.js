import { createThemedIcon } from './utils/createThemedIcon'
import { IconNearMeFilled } from './IconNearMeFilled'
import { IconNearMeOutlined } from './IconNearMeOutlined'
import { IconNearMeRounded } from './IconNearMeRounded'
import { IconNearMeSharp } from './IconNearMeSharp'
import { IconNearMeTwoTone } from './IconNearMeTwoTone'

export const IconNearMe = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNearMeFilled, IconNearMeOutlined, IconNearMeRounded, IconNearMeSharp, IconNearMeTwoTone)
