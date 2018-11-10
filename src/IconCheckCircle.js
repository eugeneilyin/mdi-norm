import { createThemedIcon } from './utils/createThemedIcon'
import { IconCheckCircleFilled } from './IconCheckCircleFilled'
import { IconCheckCircleOutlined } from './IconCheckCircleOutlined'
import { IconCheckCircleRounded } from './IconCheckCircleRounded'
import { IconCheckCircleSharp } from './IconCheckCircleSharp'
import { IconCheckCircleTwoTone } from './IconCheckCircleTwoTone'

export const IconCheckCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCheckCircleFilled, IconCheckCircleOutlined, IconCheckCircleRounded, IconCheckCircleSharp, IconCheckCircleTwoTone)
