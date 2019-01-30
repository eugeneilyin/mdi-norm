import { createThemedIcon } from './utils/createThemedIcon';
import { FilledContacts } from './FilledContacts';
import { OutlineContacts } from './OutlineContacts';
import { RoundContacts } from './RoundContacts';
import { SharpContacts } from './SharpContacts';
import { TwoToneContacts } from './TwoToneContacts';
export var Contacts =
/*#__PURE__*/
function Contacts(props) {
  return createThemedIcon(props, FilledContacts, OutlineContacts, RoundContacts, SharpContacts, TwoToneContacts);
};