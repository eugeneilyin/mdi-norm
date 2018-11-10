import { createThemedIcon } from './utils/createThemedIcon'
import { IconAcUnitFilled } from './IconAcUnitFilled'
import { IconAcUnitOutlined } from './IconAcUnitOutlined'
import { IconAcUnitRounded } from './IconAcUnitRounded'
import { IconAcUnitSharp } from './IconAcUnitSharp'
import { IconAcUnitTwoTone } from './IconAcUnitTwoTone'

export const IconAcUnit = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAcUnitFilled, IconAcUnitOutlined, IconAcUnitRounded, IconAcUnitSharp, IconAcUnitTwoTone)
