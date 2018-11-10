import { createThemedIcon } from './utils/createThemedIcon'
import { IconCropFilled } from './IconCropFilled'
import { IconCropOutlined } from './IconCropOutlined'
import { IconCropRounded } from './IconCropRounded'
import { IconCropSharp } from './IconCropSharp'
import { IconCropTwoTone } from './IconCropTwoTone'

export const IconCrop = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCropFilled, IconCropOutlined, IconCropRounded, IconCropSharp, IconCropTwoTone)
