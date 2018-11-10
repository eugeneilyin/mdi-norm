import { createThemedIcon } from './utils/createThemedIcon'
import { IconVideoCallFilled } from './IconVideoCallFilled'
import { IconVideoCallOutlined } from './IconVideoCallOutlined'
import { IconVideoCallRounded } from './IconVideoCallRounded'
import { IconVideoCallSharp } from './IconVideoCallSharp'
import { IconVideoCallTwoTone } from './IconVideoCallTwoTone'

export const IconVideoCall = /*#__PURE__*/ props =>
  createThemedIcon(props, IconVideoCallFilled, IconVideoCallOutlined, IconVideoCallRounded, IconVideoCallSharp, IconVideoCallTwoTone)
