import { createThemedIcon } from './utils/createThemedIcon'
import { IconViewColumnFilled } from './IconViewColumnFilled'
import { IconViewColumnOutlined } from './IconViewColumnOutlined'
import { IconViewColumnRounded } from './IconViewColumnRounded'
import { IconViewColumnSharp } from './IconViewColumnSharp'
import { IconViewColumnTwoTone } from './IconViewColumnTwoTone'

export const IconViewColumn = /*#__PURE__*/ props =>
  createThemedIcon(props, IconViewColumnFilled, IconViewColumnOutlined, IconViewColumnRounded, IconViewColumnSharp, IconViewColumnTwoTone)
