import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVerifiedUser } from './FilledVerifiedUser';
import { OutlineVerifiedUser } from './OutlineVerifiedUser';
import { RoundVerifiedUser } from './RoundVerifiedUser';
import { SharpVerifiedUser } from './SharpVerifiedUser';
import { TwoToneVerifiedUser } from './TwoToneVerifiedUser';
export var VerifiedUser =
/*#__PURE__*/
function VerifiedUser(props) {
  return createThemedIcon(props, FilledVerifiedUser, OutlineVerifiedUser, RoundVerifiedUser, SharpVerifiedUser, TwoToneVerifiedUser);
};