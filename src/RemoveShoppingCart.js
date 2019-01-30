import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRemoveShoppingCart } from './FilledRemoveShoppingCart'
import { OutlineRemoveShoppingCart } from './OutlineRemoveShoppingCart'
import { RoundRemoveShoppingCart } from './RoundRemoveShoppingCart'
import { SharpRemoveShoppingCart } from './SharpRemoveShoppingCart'
import { TwoToneRemoveShoppingCart } from './TwoToneRemoveShoppingCart'

export const RemoveShoppingCart = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRemoveShoppingCart, OutlineRemoveShoppingCart, RoundRemoveShoppingCart, SharpRemoveShoppingCart, TwoToneRemoveShoppingCart)
