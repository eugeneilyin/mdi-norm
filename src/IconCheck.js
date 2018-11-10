import { createThemedIcon } from './utils/createThemedIcon'
import { IconCheckFilled } from './IconCheckFilled'
import { IconCheckOutlined } from './IconCheckOutlined'
import { IconCheckRounded } from './IconCheckRounded'
import { IconCheckSharp } from './IconCheckSharp'
import { IconCheckTwoTone } from './IconCheckTwoTone'

export const IconCheck = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCheckFilled, IconCheckOutlined, IconCheckRounded, IconCheckSharp, IconCheckTwoTone)
