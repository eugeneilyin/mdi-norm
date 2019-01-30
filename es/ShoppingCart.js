import { createThemedIcon } from './utils/createThemedIcon';
import { FilledShoppingCart } from './FilledShoppingCart';
import { OutlineShoppingCart } from './OutlineShoppingCart';
import { RoundShoppingCart } from './RoundShoppingCart';
import { SharpShoppingCart } from './SharpShoppingCart';
import { TwoToneShoppingCart } from './TwoToneShoppingCart';
export var ShoppingCart =
/*#__PURE__*/
function ShoppingCart(props) {
  return createThemedIcon(props, FilledShoppingCart, OutlineShoppingCart, RoundShoppingCart, SharpShoppingCart, TwoToneShoppingCart);
};