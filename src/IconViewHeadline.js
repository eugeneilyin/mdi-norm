import { createThemedIcon } from './utils/createThemedIcon'
import { IconViewHeadlineFilled } from './IconViewHeadlineFilled'
import { IconViewHeadlineOutlined } from './IconViewHeadlineOutlined'
import { IconViewHeadlineRounded } from './IconViewHeadlineRounded'
import { IconViewHeadlineSharp } from './IconViewHeadlineSharp'
import { IconViewHeadlineTwoTone } from './IconViewHeadlineTwoTone'

export const IconViewHeadline = /*#__PURE__*/ props =>
  createThemedIcon(props, IconViewHeadlineFilled, IconViewHeadlineOutlined, IconViewHeadlineRounded, IconViewHeadlineSharp, IconViewHeadlineTwoTone)
