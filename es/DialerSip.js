import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDialerSip } from './FilledDialerSip';
import { OutlineDialerSip } from './OutlineDialerSip';
import { RoundDialerSip } from './RoundDialerSip';
import { SharpDialerSip } from './SharpDialerSip';
import { TwoToneDialerSip } from './TwoToneDialerSip';
export var DialerSip =
/*#__PURE__*/
function DialerSip(props) {
  return createThemedIcon(props, FilledDialerSip, OutlineDialerSip, RoundDialerSip, SharpDialerSip, TwoToneDialerSip);
};