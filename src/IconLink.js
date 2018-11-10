import { createThemedIcon } from './utils/createThemedIcon'
import { IconLinkFilled } from './IconLinkFilled'
import { IconLinkOutlined } from './IconLinkOutlined'
import { IconLinkRounded } from './IconLinkRounded'
import { IconLinkSharp } from './IconLinkSharp'
import { IconLinkTwoTone } from './IconLinkTwoTone'

export const IconLink = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLinkFilled, IconLinkOutlined, IconLinkRounded, IconLinkSharp, IconLinkTwoTone)
