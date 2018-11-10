import { createThemedIcon } from './utils/createThemedIcon'
import { IconNfcFilled } from './IconNfcFilled'
import { IconNfcOutlined } from './IconNfcOutlined'
import { IconNfcRounded } from './IconNfcRounded'
import { IconNfcSharp } from './IconNfcSharp'
import { IconNfcTwoTone } from './IconNfcTwoTone'

export const IconNfc = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNfcFilled, IconNfcOutlined, IconNfcRounded, IconNfcSharp, IconNfcTwoTone)
