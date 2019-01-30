import { createThemedIcon } from './utils/createThemedIcon';
import { FilledScreenLockPortrait } from './FilledScreenLockPortrait';
import { OutlineScreenLockPortrait } from './OutlineScreenLockPortrait';
import { RoundScreenLockPortrait } from './RoundScreenLockPortrait';
import { SharpScreenLockPortrait } from './SharpScreenLockPortrait';
import { TwoToneScreenLockPortrait } from './TwoToneScreenLockPortrait';
export var ScreenLockPortrait =
/*#__PURE__*/
function ScreenLockPortrait(props) {
  return createThemedIcon(props, FilledScreenLockPortrait, OutlineScreenLockPortrait, RoundScreenLockPortrait, SharpScreenLockPortrait, TwoToneScreenLockPortrait);
};