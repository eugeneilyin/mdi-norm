import { createThemedIcon } from './utils/createThemedIcon'
import { IconTransformFilled } from './IconTransformFilled'
import { IconTransformOutlined } from './IconTransformOutlined'
import { IconTransformRounded } from './IconTransformRounded'
import { IconTransformSharp } from './IconTransformSharp'
import { IconTransformTwoTone } from './IconTransformTwoTone'

export const IconTransform = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTransformFilled, IconTransformOutlined, IconTransformRounded, IconTransformSharp, IconTransformTwoTone)
