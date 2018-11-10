import { createThemedIcon } from './utils/createThemedIcon'
import { Icon3DRotationFilled } from './Icon3DRotationFilled'
import { Icon3DRotationOutlined } from './Icon3DRotationOutlined'
import { Icon3DRotationRounded } from './Icon3DRotationRounded'
import { Icon3DRotationSharp } from './Icon3DRotationSharp'
import { Icon3DRotationTwoTone } from './Icon3DRotationTwoTone'

export const Icon3DRotation = /*#__PURE__*/ props =>
  createThemedIcon(props, Icon3DRotationFilled, Icon3DRotationOutlined, Icon3DRotationRounded, Icon3DRotationSharp, Icon3DRotationTwoTone)
