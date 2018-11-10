import { createThemedIcon } from './utils/createThemedIcon'
import { IconControlPointFilled } from './IconControlPointFilled'
import { IconControlPointOutlined } from './IconControlPointOutlined'
import { IconControlPointRounded } from './IconControlPointRounded'
import { IconControlPointSharp } from './IconControlPointSharp'
import { IconControlPointTwoTone } from './IconControlPointTwoTone'

export const IconControlPoint = /*#__PURE__*/ props =>
  createThemedIcon(props, IconControlPointFilled, IconControlPointOutlined, IconControlPointRounded, IconControlPointSharp, IconControlPointTwoTone)
