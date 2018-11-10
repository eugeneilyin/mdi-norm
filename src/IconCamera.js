import { createThemedIcon } from './utils/createThemedIcon'
import { IconCameraFilled } from './IconCameraFilled'
import { IconCameraOutlined } from './IconCameraOutlined'
import { IconCameraRounded } from './IconCameraRounded'
import { IconCameraSharp } from './IconCameraSharp'
import { IconCameraTwoTone } from './IconCameraTwoTone'

export const IconCamera = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCameraFilled, IconCameraOutlined, IconCameraRounded, IconCameraSharp, IconCameraTwoTone)
