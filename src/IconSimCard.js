import { createThemedIcon } from './utils/createThemedIcon'
import { IconSimCardFilled } from './IconSimCardFilled'
import { IconSimCardOutlined } from './IconSimCardOutlined'
import { IconSimCardRounded } from './IconSimCardRounded'
import { IconSimCardSharp } from './IconSimCardSharp'
import { IconSimCardTwoTone } from './IconSimCardTwoTone'

export const IconSimCard = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSimCardFilled, IconSimCardOutlined, IconSimCardRounded, IconSimCardSharp, IconSimCardTwoTone)
