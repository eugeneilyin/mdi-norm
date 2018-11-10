import { createThemedIcon } from './utils/createThemedIcon'
import { IconZoomOutMapFilled } from './IconZoomOutMapFilled'
import { IconZoomOutMapOutlined } from './IconZoomOutMapOutlined'
import { IconZoomOutMapRounded } from './IconZoomOutMapRounded'
import { IconZoomOutMapSharp } from './IconZoomOutMapSharp'
import { IconZoomOutMapTwoTone } from './IconZoomOutMapTwoTone'

export const IconZoomOutMap = /*#__PURE__*/ props =>
  createThemedIcon(props, IconZoomOutMapFilled, IconZoomOutMapOutlined, IconZoomOutMapRounded, IconZoomOutMapSharp, IconZoomOutMapTwoTone)
