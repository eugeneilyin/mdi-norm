import { createThemedIcon } from './utils/createThemedIcon'
import { IconCloudCircleFilled } from './IconCloudCircleFilled'
import { IconCloudCircleOutlined } from './IconCloudCircleOutlined'
import { IconCloudCircleRounded } from './IconCloudCircleRounded'
import { IconCloudCircleSharp } from './IconCloudCircleSharp'
import { IconCloudCircleTwoTone } from './IconCloudCircleTwoTone'

export const IconCloudCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCloudCircleFilled, IconCloudCircleOutlined, IconCloudCircleRounded, IconCloudCircleSharp, IconCloudCircleTwoTone)
