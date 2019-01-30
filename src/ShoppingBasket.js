import { createThemedIcon } from './utils/createThemedIcon'
import { FilledShoppingBasket } from './FilledShoppingBasket'
import { OutlineShoppingBasket } from './OutlineShoppingBasket'
import { RoundShoppingBasket } from './RoundShoppingBasket'
import { SharpShoppingBasket } from './SharpShoppingBasket'
import { TwoToneShoppingBasket } from './TwoToneShoppingBasket'

export const ShoppingBasket = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledShoppingBasket, OutlineShoppingBasket, RoundShoppingBasket, SharpShoppingBasket, TwoToneShoppingBasket)
