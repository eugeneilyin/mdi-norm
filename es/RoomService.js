import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRoomService } from './FilledRoomService';
import { OutlineRoomService } from './OutlineRoomService';
import { RoundRoomService } from './RoundRoomService';
import { SharpRoomService } from './SharpRoomService';
import { TwoToneRoomService } from './TwoToneRoomService';
export var RoomService =
/*#__PURE__*/
function RoomService(props) {
  return createThemedIcon(props, FilledRoomService, OutlineRoomService, RoundRoomService, SharpRoomService, TwoToneRoomService);
};