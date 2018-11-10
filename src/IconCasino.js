import { createThemedIcon } from './utils/createThemedIcon'
import { IconCasinoFilled } from './IconCasinoFilled'
import { IconCasinoOutlined } from './IconCasinoOutlined'
import { IconCasinoRounded } from './IconCasinoRounded'
import { IconCasinoSharp } from './IconCasinoSharp'
import { IconCasinoTwoTone } from './IconCasinoTwoTone'

export const IconCasino = /*#__PURE__*/ props =>
  createThemedIcon(props, IconCasinoFilled, IconCasinoOutlined, IconCasinoRounded, IconCasinoSharp, IconCasinoTwoTone)
