import { createThemedIcon } from './utils/createThemedIcon'
import { IconDialerSipFilled } from './IconDialerSipFilled'
import { IconDialerSipOutlined } from './IconDialerSipOutlined'
import { IconDialerSipRounded } from './IconDialerSipRounded'
import { IconDialerSipSharp } from './IconDialerSipSharp'
import { IconDialerSipTwoTone } from './IconDialerSipTwoTone'

export const IconDialerSip = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDialerSipFilled, IconDialerSipOutlined, IconDialerSipRounded, IconDialerSipSharp, IconDialerSipTwoTone)
