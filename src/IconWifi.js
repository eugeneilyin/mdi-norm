import { createThemedIcon } from './utils/createThemedIcon'
import { IconWifiFilled } from './IconWifiFilled'
import { IconWifiOutlined } from './IconWifiOutlined'
import { IconWifiRounded } from './IconWifiRounded'
import { IconWifiSharp } from './IconWifiSharp'
import { IconWifiTwoTone } from './IconWifiTwoTone'

export const IconWifi = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWifiFilled, IconWifiOutlined, IconWifiRounded, IconWifiSharp, IconWifiTwoTone)
