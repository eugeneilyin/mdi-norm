import { createThemedIcon } from './utils/createThemedIcon'
import { IconPersonPinCircleFilled } from './IconPersonPinCircleFilled'
import { IconPersonPinCircleOutlined } from './IconPersonPinCircleOutlined'
import { IconPersonPinCircleRounded } from './IconPersonPinCircleRounded'
import { IconPersonPinCircleSharp } from './IconPersonPinCircleSharp'
import { IconPersonPinCircleTwoTone } from './IconPersonPinCircleTwoTone'

export const IconPersonPinCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPersonPinCircleFilled, IconPersonPinCircleOutlined, IconPersonPinCircleRounded, IconPersonPinCircleSharp, IconPersonPinCircleTwoTone)
