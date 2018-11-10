import { createThemedIcon } from './utils/createThemedIcon'
import { IconPhotoFilterFilled } from './IconPhotoFilterFilled'
import { IconPhotoFilterOutlined } from './IconPhotoFilterOutlined'
import { IconPhotoFilterRounded } from './IconPhotoFilterRounded'
import { IconPhotoFilterSharp } from './IconPhotoFilterSharp'
import { IconPhotoFilterTwoTone } from './IconPhotoFilterTwoTone'

export const IconPhotoFilter = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPhotoFilterFilled, IconPhotoFilterOutlined, IconPhotoFilterRounded, IconPhotoFilterSharp, IconPhotoFilterTwoTone)
