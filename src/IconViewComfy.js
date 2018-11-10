import { createThemedIcon } from './utils/createThemedIcon'
import { IconViewComfyFilled } from './IconViewComfyFilled'
import { IconViewComfyOutlined } from './IconViewComfyOutlined'
import { IconViewComfyRounded } from './IconViewComfyRounded'
import { IconViewComfySharp } from './IconViewComfySharp'
import { IconViewComfyTwoTone } from './IconViewComfyTwoTone'

export const IconViewComfy = /*#__PURE__*/ props =>
  createThemedIcon(props, IconViewComfyFilled, IconViewComfyOutlined, IconViewComfyRounded, IconViewComfySharp, IconViewComfyTwoTone)
