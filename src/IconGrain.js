import { createThemedIcon } from './utils/createThemedIcon'
import { IconGrainFilled } from './IconGrainFilled'
import { IconGrainOutlined } from './IconGrainOutlined'
import { IconGrainRounded } from './IconGrainRounded'
import { IconGrainSharp } from './IconGrainSharp'
import { IconGrainTwoTone } from './IconGrainTwoTone'

export const IconGrain = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGrainFilled, IconGrainOutlined, IconGrainRounded, IconGrainSharp, IconGrainTwoTone)
