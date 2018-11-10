import { createThemedIcon } from './utils/createThemedIcon'
import { IconColorLensFilled } from './IconColorLensFilled'
import { IconColorLensOutlined } from './IconColorLensOutlined'
import { IconColorLensRounded } from './IconColorLensRounded'
import { IconColorLensSharp } from './IconColorLensSharp'
import { IconColorLensTwoTone } from './IconColorLensTwoTone'

export const IconColorLens = /*#__PURE__*/ props =>
  createThemedIcon(props, IconColorLensFilled, IconColorLensOutlined, IconColorLensRounded, IconColorLensSharp, IconColorLensTwoTone)
