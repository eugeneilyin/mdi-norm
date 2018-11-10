import { createThemedIcon } from './utils/createThemedIcon'
import { IconLensFilled } from './IconLensFilled'
import { IconLensOutlined } from './IconLensOutlined'
import { IconLensRounded } from './IconLensRounded'
import { IconLensSharp } from './IconLensSharp'
import { IconLensTwoTone } from './IconLensTwoTone'

export const IconLens = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLensFilled, IconLensOutlined, IconLensRounded, IconLensSharp, IconLensTwoTone)
