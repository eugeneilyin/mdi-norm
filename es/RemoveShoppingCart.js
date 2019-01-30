import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRemoveShoppingCart } from './FilledRemoveShoppingCart';
import { OutlineRemoveShoppingCart } from './OutlineRemoveShoppingCart';
import { RoundRemoveShoppingCart } from './RoundRemoveShoppingCart';
import { SharpRemoveShoppingCart } from './SharpRemoveShoppingCart';
import { TwoToneRemoveShoppingCart } from './TwoToneRemoveShoppingCart';
export var RemoveShoppingCart =
/*#__PURE__*/
function RemoveShoppingCart(props) {
  return createThemedIcon(props, FilledRemoveShoppingCart, OutlineRemoveShoppingCart, RoundRemoveShoppingCart, SharpRemoveShoppingCart, TwoToneRemoveShoppingCart);
};