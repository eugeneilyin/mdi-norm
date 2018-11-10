import { createThemedIcon } from './utils/createThemedIcon'
import { IconConfirmationNumberFilled } from './IconConfirmationNumberFilled'
import { IconConfirmationNumberOutlined } from './IconConfirmationNumberOutlined'
import { IconConfirmationNumberRounded } from './IconConfirmationNumberRounded'
import { IconConfirmationNumberSharp } from './IconConfirmationNumberSharp'
import { IconConfirmationNumberTwoTone } from './IconConfirmationNumberTwoTone'

export const IconConfirmationNumber = /*#__PURE__*/ props =>
  createThemedIcon(props, IconConfirmationNumberFilled, IconConfirmationNumberOutlined, IconConfirmationNumberRounded, IconConfirmationNumberSharp, IconConfirmationNumberTwoTone)
