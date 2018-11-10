import { createThemedIcon } from './utils/createThemedIcon'
import { IconCommuteFilled } from './IconCommuteFilled'
import { IconCommuteOutlined } from './IconCommuteOutlined'
import { IconCommuteRounded } from './IconCommuteRounded'
import { IconCommuteSharp } from './IconCommuteSharp'
import { IconCommuteTwoTone } from './IconCommuteTwoTone'

export const IconCommute = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCommuteFilled, IconCommuteOutlined, IconCommuteRounded, IconCommuteSharp, IconCommuteTwoTone)
