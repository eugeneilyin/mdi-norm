import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAddShoppingCart } from './FilledAddShoppingCart'
import { OutlineAddShoppingCart } from './OutlineAddShoppingCart'
import { RoundAddShoppingCart } from './RoundAddShoppingCart'
import { SharpAddShoppingCart } from './SharpAddShoppingCart'
import { TwoToneAddShoppingCart } from './TwoToneAddShoppingCart'

export const AddShoppingCart = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAddShoppingCart, OutlineAddShoppingCart, RoundAddShoppingCart, SharpAddShoppingCart, TwoToneAddShoppingCart)
