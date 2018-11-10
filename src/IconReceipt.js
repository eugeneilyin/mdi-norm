import { createThemedIcon } from './utils/createThemedIcon'
import { IconReceiptFilled } from './IconReceiptFilled'
import { IconReceiptOutlined } from './IconReceiptOutlined'
import { IconReceiptRounded } from './IconReceiptRounded'
import { IconReceiptSharp } from './IconReceiptSharp'
import { IconReceiptTwoTone } from './IconReceiptTwoTone'

export const IconReceipt = /*#__PURE__*/ props =>
  createThemedIcon(props, IconReceiptFilled, IconReceiptOutlined, IconReceiptRounded, IconReceiptSharp, IconReceiptTwoTone)
