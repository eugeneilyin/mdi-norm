import { createThemedIcon } from './utils/createThemedIcon'
import { IconPolymerFilled } from './IconPolymerFilled'
import { IconPolymerOutlined } from './IconPolymerOutlined'
import { IconPolymerRounded } from './IconPolymerRounded'
import { IconPolymerSharp } from './IconPolymerSharp'
import { IconPolymerTwoTone } from './IconPolymerTwoTone'

export const IconPolymer = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPolymerFilled, IconPolymerOutlined, IconPolymerRounded, IconPolymerSharp, IconPolymerTwoTone)
