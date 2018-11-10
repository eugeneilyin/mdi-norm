import { createThemedIcon } from './utils/createThemedIcon'
import { IconAccountCircleFilled } from './IconAccountCircleFilled'
import { IconAccountCircleOutlined } from './IconAccountCircleOutlined'
import { IconAccountCircleRounded } from './IconAccountCircleRounded'
import { IconAccountCircleSharp } from './IconAccountCircleSharp'
import { IconAccountCircleTwoTone } from './IconAccountCircleTwoTone'

export const IconAccountCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAccountCircleFilled, IconAccountCircleOutlined, IconAccountCircleRounded, IconAccountCircleSharp, IconAccountCircleTwoTone)
