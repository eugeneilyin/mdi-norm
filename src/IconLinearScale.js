import { createThemedIcon } from './utils/createThemedIcon'
import { IconLinearScaleFilled } from './IconLinearScaleFilled'
import { IconLinearScaleOutlined } from './IconLinearScaleOutlined'
import { IconLinearScaleRounded } from './IconLinearScaleRounded'
import { IconLinearScaleSharp } from './IconLinearScaleSharp'
import { IconLinearScaleTwoTone } from './IconLinearScaleTwoTone'

export const IconLinearScale = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLinearScaleFilled, IconLinearScaleOutlined, IconLinearScaleRounded, IconLinearScaleSharp, IconLinearScaleTwoTone)
