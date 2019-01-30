import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCasino } from './FilledCasino';
import { OutlineCasino } from './OutlineCasino';
import { RoundCasino } from './RoundCasino';
import { SharpCasino } from './SharpCasino';
import { TwoToneCasino } from './TwoToneCasino';
export var Casino =
/*#__PURE__*/
function Casino(props) {
  return createThemedIcon(props, FilledCasino, OutlineCasino, RoundCasino, SharpCasino, TwoToneCasino);
};