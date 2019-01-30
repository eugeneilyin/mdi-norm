import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAccessTime } from './FilledAccessTime';
import { OutlineAccessTime } from './OutlineAccessTime';
import { RoundAccessTime } from './RoundAccessTime';
import { SharpAccessTime } from './SharpAccessTime';
import { TwoToneAccessTime } from './TwoToneAccessTime';
export var AccessTime =
/*#__PURE__*/
function AccessTime(props) {
  return createThemedIcon(props, FilledAccessTime, OutlineAccessTime, RoundAccessTime, SharpAccessTime, TwoToneAccessTime);
};