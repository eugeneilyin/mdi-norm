import { createThemedIcon } from './utils/createThemedIcon'
import { IconGavelFilled } from './IconGavelFilled'
import { IconGavelOutlined } from './IconGavelOutlined'
import { IconGavelRounded } from './IconGavelRounded'
import { IconGavelSharp } from './IconGavelSharp'
import { IconGavelTwoTone } from './IconGavelTwoTone'

export const IconGavel = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGavelFilled, IconGavelOutlined, IconGavelRounded, IconGavelSharp, IconGavelTwoTone)
