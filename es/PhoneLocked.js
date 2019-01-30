import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhoneLocked } from './FilledPhoneLocked';
import { OutlinePhoneLocked } from './OutlinePhoneLocked';
import { RoundPhoneLocked } from './RoundPhoneLocked';
import { SharpPhoneLocked } from './SharpPhoneLocked';
import { TwoTonePhoneLocked } from './TwoTonePhoneLocked';
export var PhoneLocked =
/*#__PURE__*/
function PhoneLocked(props) {
  return createThemedIcon(props, FilledPhoneLocked, OutlinePhoneLocked, RoundPhoneLocked, SharpPhoneLocked, TwoTonePhoneLocked);
};