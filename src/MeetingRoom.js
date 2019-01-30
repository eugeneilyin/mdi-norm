import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMeetingRoom } from './FilledMeetingRoom'
import { OutlineMeetingRoom } from './OutlineMeetingRoom'
import { RoundMeetingRoom } from './RoundMeetingRoom'
import { SharpMeetingRoom } from './SharpMeetingRoom'
import { TwoToneMeetingRoom } from './TwoToneMeetingRoom'

export const MeetingRoom = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMeetingRoom, OutlineMeetingRoom, RoundMeetingRoom, SharpMeetingRoom, TwoToneMeetingRoom)
