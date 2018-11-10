import { createThemedIcon } from './utils/createThemedIcon'
import { IconFlashOnFilled } from './IconFlashOnFilled'
import { IconFlashOnOutlined } from './IconFlashOnOutlined'
import { IconFlashOnRounded } from './IconFlashOnRounded'
import { IconFlashOnSharp } from './IconFlashOnSharp'
import { IconFlashOnTwoTone } from './IconFlashOnTwoTone'

export const IconFlashOn = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFlashOnFilled, IconFlashOnOutlined, IconFlashOnRounded, IconFlashOnSharp, IconFlashOnTwoTone)
