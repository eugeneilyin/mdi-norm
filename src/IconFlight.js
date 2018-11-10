import { createThemedIcon } from './utils/createThemedIcon'
import { IconFlightFilled } from './IconFlightFilled'
import { IconFlightOutlined } from './IconFlightOutlined'
import { IconFlightRounded } from './IconFlightRounded'
import { IconFlightSharp } from './IconFlightSharp'
import { IconFlightTwoTone } from './IconFlightTwoTone'

export const IconFlight = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFlightFilled, IconFlightOutlined, IconFlightRounded, IconFlightSharp, IconFlightTwoTone)
