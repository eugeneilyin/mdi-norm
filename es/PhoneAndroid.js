import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhoneAndroid } from './FilledPhoneAndroid';
import { OutlinePhoneAndroid } from './OutlinePhoneAndroid';
import { RoundPhoneAndroid } from './RoundPhoneAndroid';
import { SharpPhoneAndroid } from './SharpPhoneAndroid';
import { TwoTonePhoneAndroid } from './TwoTonePhoneAndroid';
export var PhoneAndroid =
/*#__PURE__*/
function PhoneAndroid(props) {
  return createThemedIcon(props, FilledPhoneAndroid, OutlinePhoneAndroid, RoundPhoneAndroid, SharpPhoneAndroid, TwoTonePhoneAndroid);
};