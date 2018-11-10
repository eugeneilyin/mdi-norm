import { createThemedIcon } from './utils/createThemedIcon'
import { IconRepeatFilled } from './IconRepeatFilled'
import { IconRepeatOutlined } from './IconRepeatOutlined'
import { IconRepeatRounded } from './IconRepeatRounded'
import { IconRepeatSharp } from './IconRepeatSharp'
import { IconRepeatTwoTone } from './IconRepeatTwoTone'

export const IconRepeat = /*#__PURE__*/ props =>
  createThemedIcon(props, IconRepeatFilled, IconRepeatOutlined, IconRepeatRounded, IconRepeatSharp, IconRepeatTwoTone)
