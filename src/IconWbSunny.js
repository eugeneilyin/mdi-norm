import { createThemedIcon } from './utils/createThemedIcon'
import { IconWbSunnyFilled } from './IconWbSunnyFilled'
import { IconWbSunnyOutlined } from './IconWbSunnyOutlined'
import { IconWbSunnyRounded } from './IconWbSunnyRounded'
import { IconWbSunnySharp } from './IconWbSunnySharp'
import { IconWbSunnyTwoTone } from './IconWbSunnyTwoTone'

export const IconWbSunny = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWbSunnyFilled, IconWbSunnyOutlined, IconWbSunnyRounded, IconWbSunnySharp, IconWbSunnyTwoTone)
