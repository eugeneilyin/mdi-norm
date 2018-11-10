import { createThemedIcon } from './utils/createThemedIcon'
import { IconImageFilled } from './IconImageFilled'
import { IconImageOutlined } from './IconImageOutlined'
import { IconImageRounded } from './IconImageRounded'
import { IconImageSharp } from './IconImageSharp'
import { IconImageTwoTone } from './IconImageTwoTone'

export const IconImage = /*#__PURE__*/ props =>
  createThemedIcon(props, IconImageFilled, IconImageOutlined, IconImageRounded, IconImageSharp, IconImageTwoTone)
