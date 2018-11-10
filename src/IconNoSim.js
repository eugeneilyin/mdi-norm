import { createThemedIcon } from './utils/createThemedIcon'
import { IconNoSimFilled } from './IconNoSimFilled'
import { IconNoSimOutlined } from './IconNoSimOutlined'
import { IconNoSimRounded } from './IconNoSimRounded'
import { IconNoSimSharp } from './IconNoSimSharp'
import { IconNoSimTwoTone } from './IconNoSimTwoTone'

export const IconNoSim = /*#__PURE__*/ props =>
  createThemedIcon(props, IconNoSimFilled, IconNoSimOutlined, IconNoSimRounded, IconNoSimSharp, IconNoSimTwoTone)
