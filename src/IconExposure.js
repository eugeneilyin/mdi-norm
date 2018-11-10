import { createThemedIcon } from './utils/createThemedIcon'
import { IconExposureFilled } from './IconExposureFilled'
import { IconExposureOutlined } from './IconExposureOutlined'
import { IconExposureRounded } from './IconExposureRounded'
import { IconExposureSharp } from './IconExposureSharp'
import { IconExposureTwoTone } from './IconExposureTwoTone'

export const IconExposure = /*#__PURE__*/ props =>
  createThemedIcon(props, IconExposureFilled, IconExposureOutlined, IconExposureRounded, IconExposureSharp, IconExposureTwoTone)
