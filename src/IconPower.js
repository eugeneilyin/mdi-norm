import { createThemedIcon } from './utils/createThemedIcon'
import { IconPowerFilled } from './IconPowerFilled'
import { IconPowerOutlined } from './IconPowerOutlined'
import { IconPowerRounded } from './IconPowerRounded'
import { IconPowerSharp } from './IconPowerSharp'
import { IconPowerTwoTone } from './IconPowerTwoTone'

export const IconPower = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPowerFilled, IconPowerOutlined, IconPowerRounded, IconPowerSharp, IconPowerTwoTone)
