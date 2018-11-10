import { createThemedIcon } from './utils/createThemedIcon'
import { IconHttpFilled } from './IconHttpFilled'
import { IconHttpOutlined } from './IconHttpOutlined'
import { IconHttpRounded } from './IconHttpRounded'
import { IconHttpSharp } from './IconHttpSharp'
import { IconHttpTwoTone } from './IconHttpTwoTone'

export const IconHttp = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHttpFilled, IconHttpOutlined, IconHttpRounded, IconHttpSharp, IconHttpTwoTone)
