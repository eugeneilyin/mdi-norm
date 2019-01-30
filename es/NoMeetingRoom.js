import { createThemedIcon } from './utils/createThemedIcon';
import { FilledNoMeetingRoom } from './FilledNoMeetingRoom';
import { OutlineNoMeetingRoom } from './OutlineNoMeetingRoom';
import { RoundNoMeetingRoom } from './RoundNoMeetingRoom';
import { SharpNoMeetingRoom } from './SharpNoMeetingRoom';
import { TwoToneNoMeetingRoom } from './TwoToneNoMeetingRoom';
export var NoMeetingRoom =
/*#__PURE__*/
function NoMeetingRoom(props) {
  return createThemedIcon(props, FilledNoMeetingRoom, OutlineNoMeetingRoom, RoundNoMeetingRoom, SharpNoMeetingRoom, TwoToneNoMeetingRoom);
};