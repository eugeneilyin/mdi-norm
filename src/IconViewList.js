import { createThemedIcon } from './utils/createThemedIcon'
import { IconViewListFilled } from './IconViewListFilled'
import { IconViewListOutlined } from './IconViewListOutlined'
import { IconViewListRounded } from './IconViewListRounded'
import { IconViewListSharp } from './IconViewListSharp'
import { IconViewListTwoTone } from './IconViewListTwoTone'

export const IconViewList = /*#__PURE__*/ props =>
  createThemedIcon(props, IconViewListFilled, IconViewListOutlined, IconViewListRounded, IconViewListSharp, IconViewListTwoTone)
