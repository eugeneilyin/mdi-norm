import { createThemedIcon } from './utils/createThemedIcon'
import { IconStopFilled } from './IconStopFilled'
import { IconStopOutlined } from './IconStopOutlined'
import { IconStopRounded } from './IconStopRounded'
import { IconStopSharp } from './IconStopSharp'
import { IconStopTwoTone } from './IconStopTwoTone'

export const IconStop = /*#__PURE__*/ props =>
  createThemedIcon(props, IconStopFilled, IconStopOutlined, IconStopRounded, IconStopSharp, IconStopTwoTone)
