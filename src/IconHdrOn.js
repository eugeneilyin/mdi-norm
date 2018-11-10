import { createThemedIcon } from './utils/createThemedIcon'
import { IconHdrOnFilled } from './IconHdrOnFilled'
import { IconHdrOnOutlined } from './IconHdrOnOutlined'
import { IconHdrOnRounded } from './IconHdrOnRounded'
import { IconHdrOnSharp } from './IconHdrOnSharp'
import { IconHdrOnTwoTone } from './IconHdrOnTwoTone'

export const IconHdrOn = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHdrOnFilled, IconHdrOnOutlined, IconHdrOnRounded, IconHdrOnSharp, IconHdrOnTwoTone)
