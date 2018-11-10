import { createThemedIcon } from './utils/createThemedIcon'
import { IconWarningFilled } from './IconWarningFilled'
import { IconWarningOutlined } from './IconWarningOutlined'
import { IconWarningRounded } from './IconWarningRounded'
import { IconWarningSharp } from './IconWarningSharp'
import { IconWarningTwoTone } from './IconWarningTwoTone'

export const IconWarning = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWarningFilled, IconWarningOutlined, IconWarningRounded, IconWarningSharp, IconWarningTwoTone)
