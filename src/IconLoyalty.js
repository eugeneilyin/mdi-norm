import { createThemedIcon } from './utils/createThemedIcon'
import { IconLoyaltyFilled } from './IconLoyaltyFilled'
import { IconLoyaltyOutlined } from './IconLoyaltyOutlined'
import { IconLoyaltyRounded } from './IconLoyaltyRounded'
import { IconLoyaltySharp } from './IconLoyaltySharp'
import { IconLoyaltyTwoTone } from './IconLoyaltyTwoTone'

export const IconLoyalty = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLoyaltyFilled, IconLoyaltyOutlined, IconLoyaltyRounded, IconLoyaltySharp, IconLoyaltyTwoTone)
