import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPerson } from './FilledPerson';
import { OutlinePerson } from './OutlinePerson';
import { RoundPerson } from './RoundPerson';
import { SharpPerson } from './SharpPerson';
import { TwoTonePerson } from './TwoTonePerson';
export var Person =
/*#__PURE__*/
function Person(props) {
  return createThemedIcon(props, FilledPerson, OutlinePerson, RoundPerson, SharpPerson, TwoTonePerson);
};