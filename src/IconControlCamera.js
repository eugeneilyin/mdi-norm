import { createThemedIcon } from './utils/createThemedIcon'
import { IconControlCameraFilled } from './IconControlCameraFilled'
import { IconControlCameraOutlined } from './IconControlCameraOutlined'
import { IconControlCameraRounded } from './IconControlCameraRounded'
import { IconControlCameraSharp } from './IconControlCameraSharp'
import { IconControlCameraTwoTone } from './IconControlCameraTwoTone'

export const IconControlCamera = /*#__PURE__*/ props =>
  createThemedIcon(props, IconControlCameraFilled, IconControlCameraOutlined, IconControlCameraRounded, IconControlCameraSharp, IconControlCameraTwoTone)
