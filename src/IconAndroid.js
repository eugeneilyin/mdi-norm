import { createThemedIcon } from './utils/createThemedIcon'
import { IconAndroidFilled } from './IconAndroidFilled'
import { IconAndroidOutlined } from './IconAndroidOutlined'
import { IconAndroidRounded } from './IconAndroidRounded'
import { IconAndroidSharp } from './IconAndroidSharp'
import { IconAndroidTwoTone } from './IconAndroidTwoTone'

export const IconAndroid = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAndroidFilled, IconAndroidOutlined, IconAndroidRounded, IconAndroidSharp, IconAndroidTwoTone)
