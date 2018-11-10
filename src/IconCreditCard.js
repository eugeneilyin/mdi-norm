import { createThemedIcon } from './utils/createThemedIcon'
import { IconCreditCardFilled } from './IconCreditCardFilled'
import { IconCreditCardOutlined } from './IconCreditCardOutlined'
import { IconCreditCardRounded } from './IconCreditCardRounded'
import { IconCreditCardSharp } from './IconCreditCardSharp'
import { IconCreditCardTwoTone } from './IconCreditCardTwoTone'

export const IconCreditCard = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCreditCardFilled, IconCreditCardOutlined, IconCreditCardRounded, IconCreditCardSharp, IconCreditCardTwoTone)
