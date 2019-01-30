import { createThemedIcon } from './utils/createThemedIcon';
import { FilledInsertInvitation } from './FilledInsertInvitation';
import { OutlineInsertInvitation } from './OutlineInsertInvitation';
import { RoundInsertInvitation } from './RoundInsertInvitation';
import { SharpInsertInvitation } from './SharpInsertInvitation';
import { TwoToneInsertInvitation } from './TwoToneInsertInvitation';
export var InsertInvitation =
/*#__PURE__*/
function InsertInvitation(props) {
  return createThemedIcon(props, FilledInsertInvitation, OutlineInsertInvitation, RoundInsertInvitation, SharpInsertInvitation, TwoToneInsertInvitation);
};