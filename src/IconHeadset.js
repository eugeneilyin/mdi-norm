import { createThemedIcon } from './utils/createThemedIcon'
import { IconHeadsetFilled } from './IconHeadsetFilled'
import { IconHeadsetOutlined } from './IconHeadsetOutlined'
import { IconHeadsetRounded } from './IconHeadsetRounded'
import { IconHeadsetSharp } from './IconHeadsetSharp'
import { IconHeadsetTwoTone } from './IconHeadsetTwoTone'

export const IconHeadset = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHeadsetFilled, IconHeadsetOutlined, IconHeadsetRounded, IconHeadsetSharp, IconHeadsetTwoTone)
