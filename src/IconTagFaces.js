import { createThemedIcon } from './utils/createThemedIcon'
import { IconTagFacesFilled } from './IconTagFacesFilled'
import { IconTagFacesOutlined } from './IconTagFacesOutlined'
import { IconTagFacesRounded } from './IconTagFacesRounded'
import { IconTagFacesSharp } from './IconTagFacesSharp'
import { IconTagFacesTwoTone } from './IconTagFacesTwoTone'

export const IconTagFaces = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTagFacesFilled, IconTagFacesOutlined, IconTagFacesRounded, IconTagFacesSharp, IconTagFacesTwoTone)
