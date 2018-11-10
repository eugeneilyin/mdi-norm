import { createThemedIcon } from './utils/createThemedIcon'
import { IconPhotoFilled } from './IconPhotoFilled'
import { IconPhotoOutlined } from './IconPhotoOutlined'
import { IconPhotoRounded } from './IconPhotoRounded'
import { IconPhotoSharp } from './IconPhotoSharp'
import { IconPhotoTwoTone } from './IconPhotoTwoTone'

export const IconPhoto = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPhotoFilled, IconPhotoOutlined, IconPhotoRounded, IconPhotoSharp, IconPhotoTwoTone)
