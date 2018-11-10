import { createThemedIcon } from './utils/createThemedIcon'
import { IconTimerFilled } from './IconTimerFilled'
import { IconTimerOutlined } from './IconTimerOutlined'
import { IconTimerRounded } from './IconTimerRounded'
import { IconTimerSharp } from './IconTimerSharp'
import { IconTimerTwoTone } from './IconTimerTwoTone'

export const IconTimer = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTimerFilled, IconTimerOutlined, IconTimerRounded, IconTimerSharp, IconTimerTwoTone)
