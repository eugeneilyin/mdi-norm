import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhonelinkSetup } from './FilledPhonelinkSetup';
import { OutlinePhonelinkSetup } from './OutlinePhonelinkSetup';
import { RoundPhonelinkSetup } from './RoundPhonelinkSetup';
import { SharpPhonelinkSetup } from './SharpPhonelinkSetup';
import { TwoTonePhonelinkSetup } from './TwoTonePhonelinkSetup';
export var PhonelinkSetup =
/*#__PURE__*/
function PhonelinkSetup(props) {
  return createThemedIcon(props, FilledPhonelinkSetup, OutlinePhonelinkSetup, RoundPhonelinkSetup, SharpPhonelinkSetup, TwoTonePhonelinkSetup);
};