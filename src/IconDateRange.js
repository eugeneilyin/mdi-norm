import { createThemedIcon } from './utils/createThemedIcon'
import { IconDateRangeFilled } from './IconDateRangeFilled'
import { IconDateRangeOutlined } from './IconDateRangeOutlined'
import { IconDateRangeRounded } from './IconDateRangeRounded'
import { IconDateRangeSharp } from './IconDateRangeSharp'
import { IconDateRangeTwoTone } from './IconDateRangeTwoTone'

export const IconDateRange = /*#__PURE__*/ props =>
  createThemedIcon(props, IconDateRangeFilled, IconDateRangeOutlined, IconDateRangeRounded, IconDateRangeSharp, IconDateRangeTwoTone)
