import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPermPhoneMsg } from './FilledPermPhoneMsg';
import { OutlinePermPhoneMsg } from './OutlinePermPhoneMsg';
import { RoundPermPhoneMsg } from './RoundPermPhoneMsg';
import { SharpPermPhoneMsg } from './SharpPermPhoneMsg';
import { TwoTonePermPhoneMsg } from './TwoTonePermPhoneMsg';
export var PermPhoneMsg =
/*#__PURE__*/
function PermPhoneMsg(props) {
  return createThemedIcon(props, FilledPermPhoneMsg, OutlinePermPhoneMsg, RoundPermPhoneMsg, SharpPermPhoneMsg, TwoTonePermPhoneMsg);
};