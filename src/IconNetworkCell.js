import { createThemedIcon } from './utils/createThemedIcon'
import { IconNetworkCellFilled } from './IconNetworkCellFilled'
import { IconNetworkCellOutlined } from './IconNetworkCellOutlined'
import { IconNetworkCellRounded } from './IconNetworkCellRounded'
import { IconNetworkCellSharp } from './IconNetworkCellSharp'
import { IconNetworkCellTwoTone } from './IconNetworkCellTwoTone'

export const IconNetworkCell = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNetworkCellFilled, IconNetworkCellOutlined, IconNetworkCellRounded, IconNetworkCellSharp, IconNetworkCellTwoTone)
