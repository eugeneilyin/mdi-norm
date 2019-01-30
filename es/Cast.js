import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCast } from './FilledCast';
import { OutlineCast } from './OutlineCast';
import { RoundCast } from './RoundCast';
import { SharpCast } from './SharpCast';
import { TwoToneCast } from './TwoToneCast';
export var Cast =
/*#__PURE__*/
function Cast(props) {
  return createThemedIcon(props, FilledCast, OutlineCast, RoundCast, SharpCast, TwoToneCast);
};