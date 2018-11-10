import { createThemedIcon } from './utils/createThemedIcon'
import { IconVibrationFilled } from './IconVibrationFilled'
import { IconVibrationOutlined } from './IconVibrationOutlined'
import { IconVibrationRounded } from './IconVibrationRounded'
import { IconVibrationSharp } from './IconVibrationSharp'
import { IconVibrationTwoTone } from './IconVibrationTwoTone'

export const IconVibration = /*#__PURE__*/ props =>
  createThemedIcon(props, IconVibrationFilled, IconVibrationOutlined, IconVibrationRounded, IconVibrationSharp, IconVibrationTwoTone)
