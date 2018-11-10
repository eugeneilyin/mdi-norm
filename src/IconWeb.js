import { createThemedIcon } from './utils/createThemedIcon'
import { IconWebFilled } from './IconWebFilled'
import { IconWebOutlined } from './IconWebOutlined'
import { IconWebRounded } from './IconWebRounded'
import { IconWebSharp } from './IconWebSharp'
import { IconWebTwoTone } from './IconWebTwoTone'

export const IconWeb = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWebFilled, IconWebOutlined, IconWebRounded, IconWebSharp, IconWebTwoTone)
