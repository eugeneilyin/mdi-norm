import { createThemedIcon } from './utils/createThemedIcon'
import { IconHighQualityFilled } from './IconHighQualityFilled'
import { IconHighQualityOutlined } from './IconHighQualityOutlined'
import { IconHighQualityRounded } from './IconHighQualityRounded'
import { IconHighQualitySharp } from './IconHighQualitySharp'
import { IconHighQualityTwoTone } from './IconHighQualityTwoTone'

export const IconHighQuality = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHighQualityFilled, IconHighQualityOutlined, IconHighQualityRounded, IconHighQualitySharp, IconHighQualityTwoTone)
