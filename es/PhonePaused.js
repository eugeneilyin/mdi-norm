import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhonePaused } from './FilledPhonePaused';
import { OutlinePhonePaused } from './OutlinePhonePaused';
import { RoundPhonePaused } from './RoundPhonePaused';
import { SharpPhonePaused } from './SharpPhonePaused';
import { TwoTonePhonePaused } from './TwoTonePhonePaused';
export var PhonePaused =
/*#__PURE__*/
function PhonePaused(props) {
  return createThemedIcon(props, FilledPhonePaused, OutlinePhonePaused, RoundPhonePaused, SharpPhonePaused, TwoTonePhonePaused);
};