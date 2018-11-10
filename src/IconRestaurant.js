import { createThemedIcon } from './utils/createThemedIcon'
import { IconRestaurantFilled } from './IconRestaurantFilled'
import { IconRestaurantOutlined } from './IconRestaurantOutlined'
import { IconRestaurantRounded } from './IconRestaurantRounded'
import { IconRestaurantSharp } from './IconRestaurantSharp'
import { IconRestaurantTwoTone } from './IconRestaurantTwoTone'

export const IconRestaurant = /*#__PURE__*/ props =>
  createThemedIcon(props, IconRestaurantFilled, IconRestaurantOutlined, IconRestaurantRounded, IconRestaurantSharp, IconRestaurantTwoTone)
