import { createThemedIcon } from './utils/createThemedIcon'
import { IconGradeFilled } from './IconGradeFilled'
import { IconGradeOutlined } from './IconGradeOutlined'
import { IconGradeRounded } from './IconGradeRounded'
import { IconGradeSharp } from './IconGradeSharp'
import { IconGradeTwoTone } from './IconGradeTwoTone'

export const IconGrade = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGradeFilled, IconGradeOutlined, IconGradeRounded, IconGradeSharp, IconGradeTwoTone)
