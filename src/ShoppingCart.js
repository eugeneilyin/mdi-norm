import { createThemedIcon } from './utils/createThemedIcon'
import { FilledShoppingCart } from './FilledShoppingCart'
import { OutlineShoppingCart } from './OutlineShoppingCart'
import { RoundShoppingCart } from './RoundShoppingCart'
import { SharpShoppingCart } from './SharpShoppingCart'
import { TwoToneShoppingCart } from './TwoToneShoppingCart'

export const ShoppingCart = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledShoppingCart, OutlineShoppingCart, RoundShoppingCart, SharpShoppingCart, TwoToneShoppingCart)
