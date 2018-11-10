import { createThemedIcon } from './utils/createThemedIcon'
import { IconNetworkCheckFilled } from './IconNetworkCheckFilled'
import { IconNetworkCheckOutlined } from './IconNetworkCheckOutlined'
import { IconNetworkCheckRounded } from './IconNetworkCheckRounded'
import { IconNetworkCheckSharp } from './IconNetworkCheckSharp'
import { IconNetworkCheckTwoTone } from './IconNetworkCheckTwoTone'

export const IconNetworkCheck = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNetworkCheckFilled, IconNetworkCheckOutlined, IconNetworkCheckRounded, IconNetworkCheckSharp, IconNetworkCheckTwoTone)
