import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPeopleOutline } from './FilledPeopleOutline';
import { OutlinePeopleOutline } from './OutlinePeopleOutline';
import { RoundPeopleOutline } from './RoundPeopleOutline';
import { SharpPeopleOutline } from './SharpPeopleOutline';
import { TwoTonePeopleOutline } from './TwoTonePeopleOutline';
export var PeopleOutline =
/*#__PURE__*/
function PeopleOutline(props) {
  return createThemedIcon(props, FilledPeopleOutline, OutlinePeopleOutline, RoundPeopleOutline, SharpPeopleOutline, TwoTonePeopleOutline);
};