import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhonelink } from './FilledPhonelink';
import { OutlinePhonelink } from './OutlinePhonelink';
import { RoundPhonelink } from './RoundPhonelink';
import { SharpPhonelink } from './SharpPhonelink';
import { TwoTonePhonelink } from './TwoTonePhonelink';
export var Phonelink =
/*#__PURE__*/
function Phonelink(props) {
  return createThemedIcon(props, FilledPhonelink, OutlinePhonelink, RoundPhonelink, SharpPhonelink, TwoTonePhonelink);
};