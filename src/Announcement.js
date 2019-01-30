import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAnnouncement } from './FilledAnnouncement'
import { OutlineAnnouncement } from './OutlineAnnouncement'
import { RoundAnnouncement } from './RoundAnnouncement'
import { SharpAnnouncement } from './SharpAnnouncement'
import { TwoToneAnnouncement } from './TwoToneAnnouncement'

export const Announcement = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAnnouncement, OutlineAnnouncement, RoundAnnouncement, SharpAnnouncement, TwoToneAnnouncement)
