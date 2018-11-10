import { createThemedIcon } from './utils/createThemedIcon'
import { IconHdrStrongFilled } from './IconHdrStrongFilled'
import { IconHdrStrongOutlined } from './IconHdrStrongOutlined'
import { IconHdrStrongRounded } from './IconHdrStrongRounded'
import { IconHdrStrongSharp } from './IconHdrStrongSharp'
import { IconHdrStrongTwoTone } from './IconHdrStrongTwoTone'

export const IconHdrStrong = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHdrStrongFilled, IconHdrStrongOutlined, IconHdrStrongRounded, IconHdrStrongSharp, IconHdrStrongTwoTone)
