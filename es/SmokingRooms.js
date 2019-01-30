import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSmokingRooms } from './FilledSmokingRooms';
import { OutlineSmokingRooms } from './OutlineSmokingRooms';
import { RoundSmokingRooms } from './RoundSmokingRooms';
import { SharpSmokingRooms } from './SharpSmokingRooms';
import { TwoToneSmokingRooms } from './TwoToneSmokingRooms';
export var SmokingRooms =
/*#__PURE__*/
function SmokingRooms(props) {
  return createThemedIcon(props, FilledSmokingRooms, OutlineSmokingRooms, RoundSmokingRooms, SharpSmokingRooms, TwoToneSmokingRooms);
};