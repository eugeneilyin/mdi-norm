import { createThemedIcon } from './utils/createThemedIcon'
import { IconStreetviewFilled } from './IconStreetviewFilled'
import { IconStreetviewOutlined } from './IconStreetviewOutlined'
import { IconStreetviewRounded } from './IconStreetviewRounded'
import { IconStreetviewSharp } from './IconStreetviewSharp'
import { IconStreetviewTwoTone } from './IconStreetviewTwoTone'

export const IconStreetview = /*#__PURE__*/ props =>
  createThemedIcon(props, IconStreetviewFilled, IconStreetviewOutlined, IconStreetviewRounded, IconStreetviewSharp, IconStreetviewTwoTone)
