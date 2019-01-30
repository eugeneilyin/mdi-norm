import { createThemedIcon } from './utils/createThemedIcon';
import { FilledShoppingBasket } from './FilledShoppingBasket';
import { OutlineShoppingBasket } from './OutlineShoppingBasket';
import { RoundShoppingBasket } from './RoundShoppingBasket';
import { SharpShoppingBasket } from './SharpShoppingBasket';
import { TwoToneShoppingBasket } from './TwoToneShoppingBasket';
export var ShoppingBasket =
/*#__PURE__*/
function ShoppingBasket(props) {
  return createThemedIcon(props, FilledShoppingBasket, OutlineShoppingBasket, RoundShoppingBasket, SharpShoppingBasket, TwoToneShoppingBasket);
};