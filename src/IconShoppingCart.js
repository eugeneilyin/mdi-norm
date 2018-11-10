import { createThemedIcon } from './utils/createThemedIcon'
import { IconShoppingCartFilled } from './IconShoppingCartFilled'
import { IconShoppingCartOutlined } from './IconShoppingCartOutlined'
import { IconShoppingCartRounded } from './IconShoppingCartRounded'
import { IconShoppingCartSharp } from './IconShoppingCartSharp'
import { IconShoppingCartTwoTone } from './IconShoppingCartTwoTone'

export const IconShoppingCart = /*#__PURE__*/ props =>
  createThemedIcon(props, IconShoppingCartFilled, IconShoppingCartOutlined, IconShoppingCartRounded, IconShoppingCartSharp, IconShoppingCartTwoTone)
