import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMms } from './FilledMms';
import { OutlineMms } from './OutlineMms';
import { RoundMms } from './RoundMms';
import { SharpMms } from './SharpMms';
import { TwoToneMms } from './TwoToneMms';
export var Mms =
/*#__PURE__*/
function Mms(props) {
  return createThemedIcon(props, FilledMms, OutlineMms, RoundMms, SharpMms, TwoToneMms);
};