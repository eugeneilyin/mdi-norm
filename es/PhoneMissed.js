import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhoneMissed } from './FilledPhoneMissed';
import { OutlinePhoneMissed } from './OutlinePhoneMissed';
import { RoundPhoneMissed } from './RoundPhoneMissed';
import { SharpPhoneMissed } from './SharpPhoneMissed';
import { TwoTonePhoneMissed } from './TwoTonePhoneMissed';
export var PhoneMissed =
/*#__PURE__*/
function PhoneMissed(props) {
  return createThemedIcon(props, FilledPhoneMissed, OutlinePhoneMissed, RoundPhoneMissed, SharpPhoneMissed, TwoTonePhoneMissed);
};