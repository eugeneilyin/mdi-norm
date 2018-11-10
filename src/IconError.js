import { createThemedIcon } from './utils/createThemedIcon'
import { IconErrorFilled } from './IconErrorFilled'
import { IconErrorOutlined } from './IconErrorOutlined'
import { IconErrorRounded } from './IconErrorRounded'
import { IconErrorSharp } from './IconErrorSharp'
import { IconErrorTwoTone } from './IconErrorTwoTone'

export const IconError = /*#__PURE__*/ props =>
  createThemedIcon(props, IconErrorFilled, IconErrorOutlined, IconErrorRounded, IconErrorSharp, IconErrorTwoTone)
