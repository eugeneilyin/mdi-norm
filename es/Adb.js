import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAdb } from './FilledAdb';
import { OutlineAdb } from './OutlineAdb';
import { RoundAdb } from './RoundAdb';
import { SharpAdb } from './SharpAdb';
import { TwoToneAdb } from './TwoToneAdb';
export var Adb =
/*#__PURE__*/
function Adb(props) {
  return createThemedIcon(props, FilledAdb, OutlineAdb, RoundAdb, SharpAdb, TwoToneAdb);
};