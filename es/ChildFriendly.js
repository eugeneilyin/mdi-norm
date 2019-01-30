import { createThemedIcon } from './utils/createThemedIcon';
import { FilledChildFriendly } from './FilledChildFriendly';
import { OutlineChildFriendly } from './OutlineChildFriendly';
import { RoundChildFriendly } from './RoundChildFriendly';
import { SharpChildFriendly } from './SharpChildFriendly';
import { TwoToneChildFriendly } from './TwoToneChildFriendly';
export var ChildFriendly =
/*#__PURE__*/
function ChildFriendly(props) {
  return createThemedIcon(props, FilledChildFriendly, OutlineChildFriendly, RoundChildFriendly, SharpChildFriendly, TwoToneChildFriendly);
};