import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhonelinkLock } from './FilledPhonelinkLock';
import { OutlinePhonelinkLock } from './OutlinePhonelinkLock';
import { RoundPhonelinkLock } from './RoundPhonelinkLock';
import { SharpPhonelinkLock } from './SharpPhonelinkLock';
import { TwoTonePhonelinkLock } from './TwoTonePhonelinkLock';
export var PhonelinkLock =
/*#__PURE__*/
function PhonelinkLock(props) {
  return createThemedIcon(props, FilledPhonelinkLock, OutlinePhonelinkLock, RoundPhonelinkLock, SharpPhonelinkLock, TwoTonePhonelinkLock);
};