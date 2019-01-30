import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNoMeetingRoom } from './FilledNoMeetingRoom'
import { OutlineNoMeetingRoom } from './OutlineNoMeetingRoom'
import { RoundNoMeetingRoom } from './RoundNoMeetingRoom'
import { SharpNoMeetingRoom } from './SharpNoMeetingRoom'
import { TwoToneNoMeetingRoom } from './TwoToneNoMeetingRoom'

export const NoMeetingRoom = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNoMeetingRoom, OutlineNoMeetingRoom, RoundNoMeetingRoom, SharpNoMeetingRoom, TwoToneNoMeetingRoom)
