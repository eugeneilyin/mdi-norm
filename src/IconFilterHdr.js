import { createThemedIcon } from './utils/createThemedIcon'
import { IconFilterHdrFilled } from './IconFilterHdrFilled'
import { IconFilterHdrOutlined } from './IconFilterHdrOutlined'
import { IconFilterHdrRounded } from './IconFilterHdrRounded'
import { IconFilterHdrSharp } from './IconFilterHdrSharp'
import { IconFilterHdrTwoTone } from './IconFilterHdrTwoTone'

export const IconFilterHdr = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFilterHdrFilled, IconFilterHdrOutlined, IconFilterHdrRounded, IconFilterHdrSharp, IconFilterHdrTwoTone)
