import { createThemedIcon } from './utils/createThemedIcon'
import { IconAccountBalanceFilled } from './IconAccountBalanceFilled'
import { IconAccountBalanceOutlined } from './IconAccountBalanceOutlined'
import { IconAccountBalanceRounded } from './IconAccountBalanceRounded'
import { IconAccountBalanceSharp } from './IconAccountBalanceSharp'
import { IconAccountBalanceTwoTone } from './IconAccountBalanceTwoTone'

export const IconAccountBalance = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAccountBalanceFilled, IconAccountBalanceOutlined, IconAccountBalanceRounded, IconAccountBalanceSharp, IconAccountBalanceTwoTone)
