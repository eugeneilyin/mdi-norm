import { createThemedIcon } from './utils/createThemedIcon'
import { IconEventSeatFilled } from './IconEventSeatFilled'
import { IconEventSeatOutlined } from './IconEventSeatOutlined'
import { IconEventSeatRounded } from './IconEventSeatRounded'
import { IconEventSeatSharp } from './IconEventSeatSharp'
import { IconEventSeatTwoTone } from './IconEventSeatTwoTone'

export const IconEventSeat = /*#__PURE__*/ props =>
  createThemedIcon(props, IconEventSeatFilled, IconEventSeatOutlined, IconEventSeatRounded, IconEventSeatSharp, IconEventSeatTwoTone)
