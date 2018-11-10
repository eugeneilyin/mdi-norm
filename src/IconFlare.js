import { createThemedIcon } from './utils/createThemedIcon'
import { IconFlareFilled } from './IconFlareFilled'
import { IconFlareOutlined } from './IconFlareOutlined'
import { IconFlareRounded } from './IconFlareRounded'
import { IconFlareSharp } from './IconFlareSharp'
import { IconFlareTwoTone } from './IconFlareTwoTone'

export const IconFlare = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFlareFilled, IconFlareOutlined, IconFlareRounded, IconFlareSharp, IconFlareTwoTone)
