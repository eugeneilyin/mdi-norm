import { createThemedIcon } from './utils/createThemedIcon'
import { IconTocFilled } from './IconTocFilled'
import { IconTocOutlined } from './IconTocOutlined'
import { IconTocRounded } from './IconTocRounded'
import { IconTocSharp } from './IconTocSharp'
import { IconTocTwoTone } from './IconTocTwoTone'

export const IconToc = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTocFilled, IconTocOutlined, IconTocRounded, IconTocSharp, IconTocTwoTone)
