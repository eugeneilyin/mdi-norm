import { createThemedIcon } from './utils/createThemedIcon'
import { IconForwardFilled } from './IconForwardFilled'
import { IconForwardOutlined } from './IconForwardOutlined'
import { IconForwardRounded } from './IconForwardRounded'
import { IconForwardSharp } from './IconForwardSharp'
import { IconForwardTwoTone } from './IconForwardTwoTone'

export const IconForward = /*#__PURE__*/ props =>
  createThemedIcon(props, IconForwardFilled, IconForwardOutlined, IconForwardRounded, IconForwardSharp, IconForwardTwoTone)
