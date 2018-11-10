import { createThemedIcon } from './utils/createThemedIcon'
import { IconHdrWeakFilled } from './IconHdrWeakFilled'
import { IconHdrWeakOutlined } from './IconHdrWeakOutlined'
import { IconHdrWeakRounded } from './IconHdrWeakRounded'
import { IconHdrWeakSharp } from './IconHdrWeakSharp'
import { IconHdrWeakTwoTone } from './IconHdrWeakTwoTone'

export const IconHdrWeak = /*#__PURE__*/ props =>
  createThemedIcon(props, IconHdrWeakFilled, IconHdrWeakOutlined, IconHdrWeakRounded, IconHdrWeakSharp, IconHdrWeakTwoTone)
