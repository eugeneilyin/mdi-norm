import { createThemedIcon } from './utils/createThemedIcon'
import { IconHdFilled } from './IconHdFilled'
import { IconHdOutlined } from './IconHdOutlined'
import { IconHdRounded } from './IconHdRounded'
import { IconHdSharp } from './IconHdSharp'
import { IconHdTwoTone } from './IconHdTwoTone'

export const IconHd = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHdFilled, IconHdOutlined, IconHdRounded, IconHdSharp, IconHdTwoTone)
