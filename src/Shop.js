import { createThemedIcon } from './utils/createThemedIcon'
import { FilledShop } from './FilledShop'
import { OutlineShop } from './OutlineShop'
import { RoundShop } from './RoundShop'
import { SharpShop } from './SharpShop'
import { TwoToneShop } from './TwoToneShop'

export const Shop = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledShop, OutlineShop, RoundShop, SharpShop, TwoToneShop)
