import { createThemedIcon } from './utils/createThemedIcon'
import { IconPartyModeFilled } from './IconPartyModeFilled'
import { IconPartyModeOutlined } from './IconPartyModeOutlined'
import { IconPartyModeRounded } from './IconPartyModeRounded'
import { IconPartyModeSharp } from './IconPartyModeSharp'
import { IconPartyModeTwoTone } from './IconPartyModeTwoTone'

export const IconPartyMode = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPartyModeFilled, IconPartyModeOutlined, IconPartyModeRounded, IconPartyModeSharp, IconPartyModeTwoTone)
