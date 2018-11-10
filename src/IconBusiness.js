import { createThemedIcon } from './utils/createThemedIcon'
import { IconBusinessFilled } from './IconBusinessFilled'
import { IconBusinessOutlined } from './IconBusinessOutlined'
import { IconBusinessRounded } from './IconBusinessRounded'
import { IconBusinessSharp } from './IconBusinessSharp'
import { IconBusinessTwoTone } from './IconBusinessTwoTone'

export const IconBusiness = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBusinessFilled, IconBusinessOutlined, IconBusinessRounded, IconBusinessSharp, IconBusinessTwoTone)
