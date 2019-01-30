import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRestaurant } from './FilledRestaurant';
import { OutlineRestaurant } from './OutlineRestaurant';
import { RoundRestaurant } from './RoundRestaurant';
import { SharpRestaurant } from './SharpRestaurant';
import { TwoToneRestaurant } from './TwoToneRestaurant';
export var Restaurant =
/*#__PURE__*/
function Restaurant(props) {
  return createThemedIcon(props, FilledRestaurant, OutlineRestaurant, RoundRestaurant, SharpRestaurant, TwoToneRestaurant);
};