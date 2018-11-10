import { createThemedIcon } from './utils/createThemedIcon'
import { IconPrintFilled } from './IconPrintFilled'
import { IconPrintOutlined } from './IconPrintOutlined'
import { IconPrintRounded } from './IconPrintRounded'
import { IconPrintSharp } from './IconPrintSharp'
import { IconPrintTwoTone } from './IconPrintTwoTone'

export const IconPrint = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPrintFilled, IconPrintOutlined, IconPrintRounded, IconPrintSharp, IconPrintTwoTone)
