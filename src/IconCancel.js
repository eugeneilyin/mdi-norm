import { createThemedIcon } from './utils/createThemedIcon'
import { IconCancelFilled } from './IconCancelFilled'
import { IconCancelOutlined } from './IconCancelOutlined'
import { IconCancelRounded } from './IconCancelRounded'
import { IconCancelSharp } from './IconCancelSharp'
import { IconCancelTwoTone } from './IconCancelTwoTone'

export const IconCancel = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCancelFilled, IconCancelOutlined, IconCancelRounded, IconCancelSharp, IconCancelTwoTone)
