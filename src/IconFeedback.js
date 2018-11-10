import { createThemedIcon } from './utils/createThemedIcon'
import { IconFeedbackFilled } from './IconFeedbackFilled'
import { IconFeedbackOutlined } from './IconFeedbackOutlined'
import { IconFeedbackRounded } from './IconFeedbackRounded'
import { IconFeedbackSharp } from './IconFeedbackSharp'
import { IconFeedbackTwoTone } from './IconFeedbackTwoTone'

export const IconFeedback = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFeedbackFilled, IconFeedbackOutlined, IconFeedbackRounded, IconFeedbackSharp, IconFeedbackTwoTone)
