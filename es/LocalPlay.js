import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalPlay } from './FilledLocalPlay';
import { OutlineLocalPlay } from './OutlineLocalPlay';
import { RoundLocalPlay } from './RoundLocalPlay';
import { SharpLocalPlay } from './SharpLocalPlay';
import { TwoToneLocalPlay } from './TwoToneLocalPlay';
export var LocalPlay =
/*#__PURE__*/
function LocalPlay(props) {
  return createThemedIcon(props, FilledLocalPlay, OutlineLocalPlay, RoundLocalPlay, SharpLocalPlay, TwoToneLocalPlay);
};