import { createThemedIcon } from './utils/createThemedIcon'
import { IconPoolFilled } from './IconPoolFilled'
import { IconPoolOutlined } from './IconPoolOutlined'
import { IconPoolRounded } from './IconPoolRounded'
import { IconPoolSharp } from './IconPoolSharp'
import { IconPoolTwoTone } from './IconPoolTwoTone'

export const IconPool = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPoolFilled, IconPoolOutlined, IconPoolRounded, IconPoolSharp, IconPoolTwoTone)
