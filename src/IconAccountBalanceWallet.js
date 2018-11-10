import { createThemedIcon } from './utils/createThemedIcon'
import { IconAccountBalanceWalletFilled } from './IconAccountBalanceWalletFilled'
import { IconAccountBalanceWalletOutlined } from './IconAccountBalanceWalletOutlined'
import { IconAccountBalanceWalletRounded } from './IconAccountBalanceWalletRounded'
import { IconAccountBalanceWalletSharp } from './IconAccountBalanceWalletSharp'
import { IconAccountBalanceWalletTwoTone } from './IconAccountBalanceWalletTwoTone'

export const IconAccountBalanceWallet = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAccountBalanceWalletFilled, IconAccountBalanceWalletOutlined, IconAccountBalanceWalletRounded, IconAccountBalanceWalletSharp, IconAccountBalanceWalletTwoTone)
