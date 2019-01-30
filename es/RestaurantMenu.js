import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRestaurantMenu } from './FilledRestaurantMenu';
import { OutlineRestaurantMenu } from './OutlineRestaurantMenu';
import { RoundRestaurantMenu } from './RoundRestaurantMenu';
import { SharpRestaurantMenu } from './SharpRestaurantMenu';
import { TwoToneRestaurantMenu } from './TwoToneRestaurantMenu';
export var RestaurantMenu =
/*#__PURE__*/
function RestaurantMenu(props) {
  return createThemedIcon(props, FilledRestaurantMenu, OutlineRestaurantMenu, RoundRestaurantMenu, SharpRestaurantMenu, TwoToneRestaurantMenu);
};