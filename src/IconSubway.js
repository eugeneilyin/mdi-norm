import { createThemedIcon } from './utils/createThemedIcon'
import { IconSubwayFilled } from './IconSubwayFilled'
import { IconSubwayOutlined } from './IconSubwayOutlined'
import { IconSubwayRounded } from './IconSubwayRounded'
import { IconSubwaySharp } from './IconSubwaySharp'
import { IconSubwayTwoTone } from './IconSubwayTwoTone'

export const IconSubway = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSubwayFilled, IconSubwayOutlined, IconSubwayRounded, IconSubwaySharp, IconSubwayTwoTone)
