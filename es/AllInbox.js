import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAllInbox } from './FilledAllInbox';
import { OutlineAllInbox } from './OutlineAllInbox';
import { RoundAllInbox } from './RoundAllInbox';
import { SharpAllInbox } from './SharpAllInbox';
import { TwoToneAllInbox } from './TwoToneAllInbox';
export var AllInbox =
/*#__PURE__*/
function AllInbox(props) {
  return createThemedIcon(props, FilledAllInbox, OutlineAllInbox, RoundAllInbox, SharpAllInbox, TwoToneAllInbox);
};