import { createThemedIcon } from './utils/createThemedIcon'
import { IconSdCardFilled } from './IconSdCardFilled'
import { IconSdCardOutlined } from './IconSdCardOutlined'
import { IconSdCardRounded } from './IconSdCardRounded'
import { IconSdCardSharp } from './IconSdCardSharp'
import { IconSdCardTwoTone } from './IconSdCardTwoTone'

export const IconSdCard = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSdCardFilled, IconSdCardOutlined, IconSdCardRounded, IconSdCardSharp, IconSdCardTwoTone)
