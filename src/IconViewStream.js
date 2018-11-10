import { createThemedIcon } from './utils/createThemedIcon'
import { IconViewStreamFilled } from './IconViewStreamFilled'
import { IconViewStreamOutlined } from './IconViewStreamOutlined'
import { IconViewStreamRounded } from './IconViewStreamRounded'
import { IconViewStreamSharp } from './IconViewStreamSharp'
import { IconViewStreamTwoTone } from './IconViewStreamTwoTone'

export const IconViewStream = /*#__PURE__*/ props =>
  createThemedIcon(props, IconViewStreamFilled, IconViewStreamOutlined, IconViewStreamRounded, IconViewStreamSharp, IconViewStreamTwoTone)
