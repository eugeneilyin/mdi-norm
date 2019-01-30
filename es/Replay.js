import { createThemedIcon } from './utils/createThemedIcon';
import { FilledReplay } from './FilledReplay';
import { OutlineReplay } from './OutlineReplay';
import { RoundReplay } from './RoundReplay';
import { SharpReplay } from './SharpReplay';
import { TwoToneReplay } from './TwoToneReplay';
export var Replay =
/*#__PURE__*/
function Replay(props) {
  return createThemedIcon(props, FilledReplay, OutlineReplay, RoundReplay, SharpReplay, TwoToneReplay);
};