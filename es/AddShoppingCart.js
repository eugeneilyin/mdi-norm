import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAddShoppingCart } from './FilledAddShoppingCart';
import { OutlineAddShoppingCart } from './OutlineAddShoppingCart';
import { RoundAddShoppingCart } from './RoundAddShoppingCart';
import { SharpAddShoppingCart } from './SharpAddShoppingCart';
import { TwoToneAddShoppingCart } from './TwoToneAddShoppingCart';
export var AddShoppingCart =
/*#__PURE__*/
function AddShoppingCart(props) {
  return createThemedIcon(props, FilledAddShoppingCart, OutlineAddShoppingCart, RoundAddShoppingCart, SharpAddShoppingCart, TwoToneAddShoppingCart);
};