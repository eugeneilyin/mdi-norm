import { createThemedIcon } from './utils/createThemedIcon'
import { IconBrokenImageFilled } from './IconBrokenImageFilled'
import { IconBrokenImageOutlined } from './IconBrokenImageOutlined'
import { IconBrokenImageRounded } from './IconBrokenImageRounded'
import { IconBrokenImageSharp } from './IconBrokenImageSharp'
import { IconBrokenImageTwoTone } from './IconBrokenImageTwoTone'

export const IconBrokenImage = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBrokenImageFilled, IconBrokenImageOutlined, IconBrokenImageRounded, IconBrokenImageSharp, IconBrokenImageTwoTone)
