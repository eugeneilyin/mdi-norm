import { createThemedIcon } from './utils/createThemedIcon'
import { IconAddToPhotosFilled } from './IconAddToPhotosFilled'
import { IconAddToPhotosOutlined } from './IconAddToPhotosOutlined'
import { IconAddToPhotosRounded } from './IconAddToPhotosRounded'
import { IconAddToPhotosSharp } from './IconAddToPhotosSharp'
import { IconAddToPhotosTwoTone } from './IconAddToPhotosTwoTone'

export const IconAddToPhotos = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAddToPhotosFilled, IconAddToPhotosOutlined, IconAddToPhotosRounded, IconAddToPhotosSharp, IconAddToPhotosTwoTone)
