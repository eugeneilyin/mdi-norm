import { createThemedIcon } from './utils/createThemedIcon'
import { IconPaymentFilled } from './IconPaymentFilled'
import { IconPaymentOutlined } from './IconPaymentOutlined'
import { IconPaymentRounded } from './IconPaymentRounded'
import { IconPaymentSharp } from './IconPaymentSharp'
import { IconPaymentTwoTone } from './IconPaymentTwoTone'

export const IconPayment = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPaymentFilled, IconPaymentOutlined, IconPaymentRounded, IconPaymentSharp, IconPaymentTwoTone)
