import { createThemedIcon } from './utils/createThemedIcon'
import { IconAvTimerFilled } from './IconAvTimerFilled'
import { IconAvTimerOutlined } from './IconAvTimerOutlined'
import { IconAvTimerRounded } from './IconAvTimerRounded'
import { IconAvTimerSharp } from './IconAvTimerSharp'
import { IconAvTimerTwoTone } from './IconAvTimerTwoTone'

export const IconAvTimer = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAvTimerFilled, IconAvTimerOutlined, IconAvTimerRounded, IconAvTimerSharp, IconAvTimerTwoTone)
