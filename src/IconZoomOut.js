import { createThemedIcon } from './utils/createThemedIcon'
import { IconZoomOutFilled } from './IconZoomOutFilled'
import { IconZoomOutOutlined } from './IconZoomOutOutlined'
import { IconZoomOutRounded } from './IconZoomOutRounded'
import { IconZoomOutSharp } from './IconZoomOutSharp'
import { IconZoomOutTwoTone } from './IconZoomOutTwoTone'

export const IconZoomOut = /*#__PURE__*/ props =>
  createThemedIcon(props, IconZoomOutFilled, IconZoomOutOutlined, IconZoomOutRounded, IconZoomOutSharp, IconZoomOutTwoTone)
