import { createThemedIcon } from './utils/createThemedIcon'
import { IconGolfCourseFilled } from './IconGolfCourseFilled'
import { IconGolfCourseOutlined } from './IconGolfCourseOutlined'
import { IconGolfCourseRounded } from './IconGolfCourseRounded'
import { IconGolfCourseSharp } from './IconGolfCourseSharp'
import { IconGolfCourseTwoTone } from './IconGolfCourseTwoTone'

export const IconGolfCourse = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGolfCourseFilled, IconGolfCourseOutlined, IconGolfCourseRounded, IconGolfCourseSharp, IconGolfCourseTwoTone)
