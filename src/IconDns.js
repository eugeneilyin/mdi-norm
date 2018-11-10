import { createThemedIcon } from './utils/createThemedIcon'
import { IconDnsFilled } from './IconDnsFilled'
import { IconDnsOutlined } from './IconDnsOutlined'
import { IconDnsRounded } from './IconDnsRounded'
import { IconDnsSharp } from './IconDnsSharp'
import { IconDnsTwoTone } from './IconDnsTwoTone'

export const IconDns = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDnsFilled, IconDnsOutlined, IconDnsRounded, IconDnsSharp, IconDnsTwoTone)
