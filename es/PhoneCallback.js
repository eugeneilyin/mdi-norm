import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhoneCallback } from './FilledPhoneCallback';
import { OutlinePhoneCallback } from './OutlinePhoneCallback';
import { RoundPhoneCallback } from './RoundPhoneCallback';
import { SharpPhoneCallback } from './SharpPhoneCallback';
import { TwoTonePhoneCallback } from './TwoTonePhoneCallback';
export var PhoneCallback =
/*#__PURE__*/
function PhoneCallback(props) {
  return createThemedIcon(props, FilledPhoneCallback, OutlinePhoneCallback, RoundPhoneCallback, SharpPhoneCallback, TwoTonePhoneCallback);
};