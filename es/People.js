import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPeople } from './FilledPeople';
import { OutlinePeople } from './OutlinePeople';
import { RoundPeople } from './RoundPeople';
import { SharpPeople } from './SharpPeople';
import { TwoTonePeople } from './TwoTonePeople';
export var People =
/*#__PURE__*/
function People(props) {
  return createThemedIcon(props, FilledPeople, OutlinePeople, RoundPeople, SharpPeople, TwoTonePeople);
};