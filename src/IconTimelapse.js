import { createThemedIcon } from './utils/createThemedIcon'
import { IconTimelapseFilled } from './IconTimelapseFilled'
import { IconTimelapseOutlined } from './IconTimelapseOutlined'
import { IconTimelapseRounded } from './IconTimelapseRounded'
import { IconTimelapseSharp } from './IconTimelapseSharp'
import { IconTimelapseTwoTone } from './IconTimelapseTwoTone'

export const IconTimelapse = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTimelapseFilled, IconTimelapseOutlined, IconTimelapseRounded, IconTimelapseSharp, IconTimelapseTwoTone)
