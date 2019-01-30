import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSms } from './FilledSms';
import { OutlineSms } from './OutlineSms';
import { RoundSms } from './RoundSms';
import { SharpSms } from './SharpSms';
import { TwoToneSms } from './TwoToneSms';
export var Sms =
/*#__PURE__*/
function Sms(props) {
  return createThemedIcon(props, FilledSms, OutlineSms, RoundSms, SharpSms, TwoToneSms);
};