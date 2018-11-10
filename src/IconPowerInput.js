import { createThemedIcon } from './utils/createThemedIcon'
import { IconPowerInputFilled } from './IconPowerInputFilled'
import { IconPowerInputOutlined } from './IconPowerInputOutlined'
import { IconPowerInputRounded } from './IconPowerInputRounded'
import { IconPowerInputSharp } from './IconPowerInputSharp'
import { IconPowerInputTwoTone } from './IconPowerInputTwoTone'

export const IconPowerInput = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPowerInputFilled, IconPowerInputOutlined, IconPowerInputRounded, IconPowerInputSharp, IconPowerInputTwoTone)
