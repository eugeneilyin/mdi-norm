import { createThemedIcon } from './utils/createThemedIcon'
import { IconFlipFilled } from './IconFlipFilled'
import { IconFlipOutlined } from './IconFlipOutlined'
import { IconFlipRounded } from './IconFlipRounded'
import { IconFlipSharp } from './IconFlipSharp'
import { IconFlipTwoTone } from './IconFlipTwoTone'

export const IconFlip = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFlipFilled, IconFlipOutlined, IconFlipRounded, IconFlipSharp, IconFlipTwoTone)
