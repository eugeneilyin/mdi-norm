import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMeetingRoom } from './FilledMeetingRoom';
import { OutlineMeetingRoom } from './OutlineMeetingRoom';
import { RoundMeetingRoom } from './RoundMeetingRoom';
import { SharpMeetingRoom } from './SharpMeetingRoom';
import { TwoToneMeetingRoom } from './TwoToneMeetingRoom';
export var MeetingRoom =
/*#__PURE__*/
function MeetingRoom(props) {
  return createThemedIcon(props, FilledMeetingRoom, OutlineMeetingRoom, RoundMeetingRoom, SharpMeetingRoom, TwoToneMeetingRoom);
};