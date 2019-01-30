import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBallot } from './FilledBallot';
import { OutlineBallot } from './OutlineBallot';
import { RoundBallot } from './RoundBallot';
import { SharpBallot } from './SharpBallot';
import { TwoToneBallot } from './TwoToneBallot';
export var Ballot =
/*#__PURE__*/
function Ballot(props) {
  return createThemedIcon(props, FilledBallot, OutlineBallot, RoundBallot, SharpBallot, TwoToneBallot);
};