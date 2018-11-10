import { createThemedIcon } from './utils/createThemedIcon'
import { IconCloudFilled } from './IconCloudFilled'
import { IconCloudOutlined } from './IconCloudOutlined'
import { IconCloudRounded } from './IconCloudRounded'
import { IconCloudSharp } from './IconCloudSharp'
import { IconCloudTwoTone } from './IconCloudTwoTone'

export const IconCloud = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCloudFilled, IconCloudOutlined, IconCloudRounded, IconCloudSharp, IconCloudTwoTone)
