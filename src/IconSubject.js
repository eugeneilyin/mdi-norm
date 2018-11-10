import { createThemedIcon } from './utils/createThemedIcon'
import { IconSubjectFilled } from './IconSubjectFilled'
import { IconSubjectOutlined } from './IconSubjectOutlined'
import { IconSubjectRounded } from './IconSubjectRounded'
import { IconSubjectSharp } from './IconSubjectSharp'
import { IconSubjectTwoTone } from './IconSubjectTwoTone'

export const IconSubject = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSubjectFilled, IconSubjectOutlined, IconSubjectRounded, IconSubjectSharp, IconSubjectTwoTone)
