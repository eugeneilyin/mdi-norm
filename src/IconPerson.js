import { createThemedIcon } from './utils/createThemedIcon'
import { IconPersonFilled } from './IconPersonFilled'
import { IconPersonOutlined } from './IconPersonOutlined'
import { IconPersonRounded } from './IconPersonRounded'
import { IconPersonSharp } from './IconPersonSharp'
import { IconPersonTwoTone } from './IconPersonTwoTone'

export const IconPerson = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPersonFilled, IconPersonOutlined, IconPersonRounded, IconPersonSharp, IconPersonTwoTone)
