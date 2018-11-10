import { createThemedIcon } from './utils/createThemedIcon'
import { IconOutlinedFlagFilled } from './IconOutlinedFlagFilled'
import { IconOutlinedFlagOutlined } from './IconOutlinedFlagOutlined'
import { IconOutlinedFlagRounded } from './IconOutlinedFlagRounded'
import { IconOutlinedFlagSharp } from './IconOutlinedFlagSharp'
import { IconOutlinedFlagTwoTone } from './IconOutlinedFlagTwoTone'

export const IconOutlinedFlag = /*#__PURE__*/ props =>
  createThemedIcon(props, IconOutlinedFlagFilled, IconOutlinedFlagOutlined, IconOutlinedFlagRounded, IconOutlinedFlagSharp, IconOutlinedFlagTwoTone)
