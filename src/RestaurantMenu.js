import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRestaurantMenu } from './FilledRestaurantMenu'
import { OutlineRestaurantMenu } from './OutlineRestaurantMenu'
import { RoundRestaurantMenu } from './RoundRestaurantMenu'
import { SharpRestaurantMenu } from './SharpRestaurantMenu'
import { TwoToneRestaurantMenu } from './TwoToneRestaurantMenu'

export const RestaurantMenu = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRestaurantMenu, OutlineRestaurantMenu, RoundRestaurantMenu, SharpRestaurantMenu, TwoToneRestaurantMenu)
