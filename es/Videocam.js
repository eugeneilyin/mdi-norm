import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVideocam } from './FilledVideocam';
import { OutlineVideocam } from './OutlineVideocam';
import { RoundVideocam } from './RoundVideocam';
import { SharpVideocam } from './SharpVideocam';
import { TwoToneVideocam } from './TwoToneVideocam';
export var Videocam =
/*#__PURE__*/
function Videocam(props) {
  return createThemedIcon(props, FilledVideocam, OutlineVideocam, RoundVideocam, SharpVideocam, TwoToneVideocam);
};