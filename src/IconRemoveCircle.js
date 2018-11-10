import { createThemedIcon } from './utils/createThemedIcon'
import { IconRemoveCircleFilled } from './IconRemoveCircleFilled'
import { IconRemoveCircleOutlined } from './IconRemoveCircleOutlined'
import { IconRemoveCircleRounded } from './IconRemoveCircleRounded'
import { IconRemoveCircleSharp } from './IconRemoveCircleSharp'
import { IconRemoveCircleTwoTone } from './IconRemoveCircleTwoTone'

export const IconRemoveCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, IconRemoveCircleFilled, IconRemoveCircleOutlined, IconRemoveCircleRounded, IconRemoveCircleSharp, IconRemoveCircleTwoTone)
