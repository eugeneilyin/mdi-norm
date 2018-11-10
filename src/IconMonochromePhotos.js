import { createThemedIcon } from './utils/createThemedIcon'
import { IconMonochromePhotosFilled } from './IconMonochromePhotosFilled'
import { IconMonochromePhotosOutlined } from './IconMonochromePhotosOutlined'
import { IconMonochromePhotosRounded } from './IconMonochromePhotosRounded'
import { IconMonochromePhotosSharp } from './IconMonochromePhotosSharp'
import { IconMonochromePhotosTwoTone } from './IconMonochromePhotosTwoTone'

export const IconMonochromePhotos = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMonochromePhotosFilled, IconMonochromePhotosOutlined, IconMonochromePhotosRounded, IconMonochromePhotosSharp, IconMonochromePhotosTwoTone)
