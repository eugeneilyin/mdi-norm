import { createThemedIcon } from './utils/createThemedIcon'
import { IconFaceFilled } from './IconFaceFilled'
import { IconFaceOutlined } from './IconFaceOutlined'
import { IconFaceRounded } from './IconFaceRounded'
import { IconFaceSharp } from './IconFaceSharp'
import { IconFaceTwoTone } from './IconFaceTwoTone'

export const IconFace = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFaceFilled, IconFaceOutlined, IconFaceRounded, IconFaceSharp, IconFaceTwoTone)
