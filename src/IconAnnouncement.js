import { createThemedIcon } from './utils/createThemedIcon'
import { IconAnnouncementFilled } from './IconAnnouncementFilled'
import { IconAnnouncementOutlined } from './IconAnnouncementOutlined'
import { IconAnnouncementRounded } from './IconAnnouncementRounded'
import { IconAnnouncementSharp } from './IconAnnouncementSharp'
import { IconAnnouncementTwoTone } from './IconAnnouncementTwoTone'

export const IconAnnouncement = /*#__PURE__*/ props =>
  createThemedIcon(props, IconAnnouncementFilled, IconAnnouncementOutlined, IconAnnouncementRounded, IconAnnouncementSharp, IconAnnouncementTwoTone)
