import { createThemedIcon } from './utils/createThemedIcon'
import { IconViewQuiltFilled } from './IconViewQuiltFilled'
import { IconViewQuiltOutlined } from './IconViewQuiltOutlined'
import { IconViewQuiltRounded } from './IconViewQuiltRounded'
import { IconViewQuiltSharp } from './IconViewQuiltSharp'
import { IconViewQuiltTwoTone } from './IconViewQuiltTwoTone'

export const IconViewQuilt = /*#__PURE__*/ props =>
  createThemedIcon(props, IconViewQuiltFilled, IconViewQuiltOutlined, IconViewQuiltRounded, IconViewQuiltSharp, IconViewQuiltTwoTone)
