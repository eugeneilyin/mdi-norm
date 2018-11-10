import { createThemedIcon } from './utils/createThemedIcon'
import { IconMarkunreadFilled } from './IconMarkunreadFilled'
import { IconMarkunreadOutlined } from './IconMarkunreadOutlined'
import { IconMarkunreadRounded } from './IconMarkunreadRounded'
import { IconMarkunreadSharp } from './IconMarkunreadSharp'
import { IconMarkunreadTwoTone } from './IconMarkunreadTwoTone'

export const IconMarkunread = /*#__PURE__*/ props =>
  createThemedIcon(props, IconMarkunreadFilled, IconMarkunreadOutlined, IconMarkunreadRounded, IconMarkunreadSharp, IconMarkunreadTwoTone)
