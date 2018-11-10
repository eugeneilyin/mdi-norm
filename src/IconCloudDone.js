import { createThemedIcon } from './utils/createThemedIcon'
import { IconCloudDoneFilled } from './IconCloudDoneFilled'
import { IconCloudDoneOutlined } from './IconCloudDoneOutlined'
import { IconCloudDoneRounded } from './IconCloudDoneRounded'
import { IconCloudDoneSharp } from './IconCloudDoneSharp'
import { IconCloudDoneTwoTone } from './IconCloudDoneTwoTone'

export const IconCloudDone = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCloudDoneFilled, IconCloudDoneOutlined, IconCloudDoneRounded, IconCloudDoneSharp, IconCloudDoneTwoTone)
