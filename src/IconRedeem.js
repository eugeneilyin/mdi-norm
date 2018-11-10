import { createThemedIcon } from './utils/createThemedIcon'
import { IconRedeemFilled } from './IconRedeemFilled'
import { IconRedeemOutlined } from './IconRedeemOutlined'
import { IconRedeemRounded } from './IconRedeemRounded'
import { IconRedeemSharp } from './IconRedeemSharp'
import { IconRedeemTwoTone } from './IconRedeemTwoTone'

export const IconRedeem = /*#__PURE__*/ props =>
  createThemedIcon(props, IconRedeemFilled, IconRedeemOutlined, IconRedeemRounded, IconRedeemSharp, IconRedeemTwoTone)
