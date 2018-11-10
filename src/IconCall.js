import { createThemedIcon } from './utils/createThemedIcon'
import { IconCallFilled } from './IconCallFilled'
import { IconCallOutlined } from './IconCallOutlined'
import { IconCallRounded } from './IconCallRounded'
import { IconCallSharp } from './IconCallSharp'
import { IconCallTwoTone } from './IconCallTwoTone'

export const IconCall = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCallFilled, IconCallOutlined, IconCallRounded, IconCallSharp, IconCallTwoTone)
