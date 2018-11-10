import { createThemedIcon } from './utils/createThemedIcon'
import { IconTonalityFilled } from './IconTonalityFilled'
import { IconTonalityOutlined } from './IconTonalityOutlined'
import { IconTonalityRounded } from './IconTonalityRounded'
import { IconTonalitySharp } from './IconTonalitySharp'
import { IconTonalityTwoTone } from './IconTonalityTwoTone'

export const IconTonality = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTonalityFilled, IconTonalityOutlined, IconTonalityRounded, IconTonalitySharp, IconTonalityTwoTone)
