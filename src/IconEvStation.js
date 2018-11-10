import { createThemedIcon } from './utils/createThemedIcon'
import { IconEvStationFilled } from './IconEvStationFilled'
import { IconEvStationOutlined } from './IconEvStationOutlined'
import { IconEvStationRounded } from './IconEvStationRounded'
import { IconEvStationSharp } from './IconEvStationSharp'
import { IconEvStationTwoTone } from './IconEvStationTwoTone'

export const IconEvStation = /*#__PURE__*/ props =>
  createThemedIcon(props, IconEvStationFilled, IconEvStationOutlined, IconEvStationRounded, IconEvStationSharp, IconEvStationTwoTone)
