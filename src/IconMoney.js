import { createThemedIcon } from './utils/createThemedIcon'
import { IconMoneyFilled } from './IconMoneyFilled'
import { IconMoneyOutlined } from './IconMoneyOutlined'
import { IconMoneyRounded } from './IconMoneyRounded'
import { IconMoneySharp } from './IconMoneySharp'
import { IconMoneyTwoTone } from './IconMoneyTwoTone'

export const IconMoney = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMoneyFilled, IconMoneyOutlined, IconMoneyRounded, IconMoneySharp, IconMoneyTwoTone)
