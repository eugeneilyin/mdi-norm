import { createThemedIcon } from './utils/createThemedIcon'
import { IconInputFilled } from './IconInputFilled'
import { IconInputOutlined } from './IconInputOutlined'
import { IconInputRounded } from './IconInputRounded'
import { IconInputSharp } from './IconInputSharp'
import { IconInputTwoTone } from './IconInputTwoTone'

export const IconInput = /*#__PURE__*/ props =>
  createThemedIcon(props, IconInputFilled, IconInputOutlined, IconInputRounded, IconInputSharp, IconInputTwoTone)
