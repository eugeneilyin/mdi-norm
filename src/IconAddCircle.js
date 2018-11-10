import { createThemedIcon } from './utils/createThemedIcon'
import { IconAddCircleFilled } from './IconAddCircleFilled'
import { IconAddCircleOutlined } from './IconAddCircleOutlined'
import { IconAddCircleRounded } from './IconAddCircleRounded'
import { IconAddCircleSharp } from './IconAddCircleSharp'
import { IconAddCircleTwoTone } from './IconAddCircleTwoTone'

export const IconAddCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAddCircleFilled, IconAddCircleOutlined, IconAddCircleRounded, IconAddCircleSharp, IconAddCircleTwoTone)
