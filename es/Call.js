import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCall } from './FilledCall';
import { OutlineCall } from './OutlineCall';
import { RoundCall } from './RoundCall';
import { SharpCall } from './SharpCall';
import { TwoToneCall } from './TwoToneCall';
export var Call =
/*#__PURE__*/
function Call(props) {
  return createThemedIcon(props, FilledCall, OutlineCall, RoundCall, SharpCall, TwoToneCall);
};