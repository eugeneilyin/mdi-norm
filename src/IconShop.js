import { createThemedIcon } from './utils/createThemedIcon'
import { IconShopFilled } from './IconShopFilled'
import { IconShopOutlined } from './IconShopOutlined'
import { IconShopRounded } from './IconShopRounded'
import { IconShopSharp } from './IconShopSharp'
import { IconShopTwoTone } from './IconShopTwoTone'

export const IconShop = /*#__PURE__*/ props =>
  createThemedIcon(props, IconShopFilled, IconShopOutlined, IconShopRounded, IconShopSharp, IconShopTwoTone)
