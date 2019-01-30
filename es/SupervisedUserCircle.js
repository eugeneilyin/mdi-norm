import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSupervisedUserCircle } from './FilledSupervisedUserCircle';
import { OutlineSupervisedUserCircle } from './OutlineSupervisedUserCircle';
import { RoundSupervisedUserCircle } from './RoundSupervisedUserCircle';
import { SharpSupervisedUserCircle } from './SharpSupervisedUserCircle';
import { TwoToneSupervisedUserCircle } from './TwoToneSupervisedUserCircle';
export var SupervisedUserCircle =
/*#__PURE__*/
function SupervisedUserCircle(props) {
  return createThemedIcon(props, FilledSupervisedUserCircle, OutlineSupervisedUserCircle, RoundSupervisedUserCircle, SharpSupervisedUserCircle, TwoToneSupervisedUserCircle);
};