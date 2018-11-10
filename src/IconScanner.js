import { createThemedIcon } from './utils/createThemedIcon'
import { IconScannerFilled } from './IconScannerFilled'
import { IconScannerOutlined } from './IconScannerOutlined'
import { IconScannerRounded } from './IconScannerRounded'
import { IconScannerSharp } from './IconScannerSharp'
import { IconScannerTwoTone } from './IconScannerTwoTone'

export const IconScanner = /*#__PURE__*/ props =>
  createThemedIcon(props, IconScannerFilled, IconScannerOutlined, IconScannerRounded, IconScannerSharp, IconScannerTwoTone)
