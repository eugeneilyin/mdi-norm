import { createThemedIcon } from './utils/createThemedIcon'
import { IconDomainFilled } from './IconDomainFilled'
import { IconDomainOutlined } from './IconDomainOutlined'
import { IconDomainRounded } from './IconDomainRounded'
import { IconDomainSharp } from './IconDomainSharp'
import { IconDomainTwoTone } from './IconDomainTwoTone'

export const IconDomain = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDomainFilled, IconDomainOutlined, IconDomainRounded, IconDomainSharp, IconDomainTwoTone)
