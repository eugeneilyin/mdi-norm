import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAnnouncement } from './FilledAnnouncement';
import { OutlineAnnouncement } from './OutlineAnnouncement';
import { RoundAnnouncement } from './RoundAnnouncement';
import { SharpAnnouncement } from './SharpAnnouncement';
import { TwoToneAnnouncement } from './TwoToneAnnouncement';
export var Announcement =
/*#__PURE__*/
function Announcement(props) {
  return createThemedIcon(props, FilledAnnouncement, OutlineAnnouncement, RoundAnnouncement, SharpAnnouncement, TwoToneAnnouncement);
};