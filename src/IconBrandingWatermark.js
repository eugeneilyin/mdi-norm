import { createThemedIcon } from './utils/createThemedIcon'
import { IconBrandingWatermarkFilled } from './IconBrandingWatermarkFilled'
import { IconBrandingWatermarkOutlined } from './IconBrandingWatermarkOutlined'
import { IconBrandingWatermarkRounded } from './IconBrandingWatermarkRounded'
import { IconBrandingWatermarkSharp } from './IconBrandingWatermarkSharp'
import { IconBrandingWatermarkTwoTone } from './IconBrandingWatermarkTwoTone'

export const IconBrandingWatermark = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBrandingWatermarkFilled, IconBrandingWatermarkOutlined, IconBrandingWatermarkRounded, IconBrandingWatermarkSharp, IconBrandingWatermarkTwoTone)
