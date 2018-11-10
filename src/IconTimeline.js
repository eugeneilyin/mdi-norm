import { createThemedIcon } from './utils/createThemedIcon'
import { IconTimelineFilled } from './IconTimelineFilled'
import { IconTimelineOutlined } from './IconTimelineOutlined'
import { IconTimelineRounded } from './IconTimelineRounded'
import { IconTimelineSharp } from './IconTimelineSharp'
import { IconTimelineTwoTone } from './IconTimelineTwoTone'

export const IconTimeline = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTimelineFilled, IconTimelineOutlined, IconTimelineRounded, IconTimelineSharp, IconTimelineTwoTone)
