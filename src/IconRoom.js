import { createThemedIcon } from './utils/createThemedIcon'
import { IconRoomFilled } from './IconRoomFilled'
import { IconRoomOutlined } from './IconRoomOutlined'
import { IconRoomRounded } from './IconRoomRounded'
import { IconRoomSharp } from './IconRoomSharp'
import { IconRoomTwoTone } from './IconRoomTwoTone'

export const IconRoom = /*#__PURE__*/ props =>
  createThemedIcon(props, IconRoomFilled, IconRoomOutlined, IconRoomRounded, IconRoomSharp, IconRoomTwoTone)
