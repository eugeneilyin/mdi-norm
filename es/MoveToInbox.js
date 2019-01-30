import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMoveToInbox } from './FilledMoveToInbox';
import { OutlineMoveToInbox } from './OutlineMoveToInbox';
import { RoundMoveToInbox } from './RoundMoveToInbox';
import { SharpMoveToInbox } from './SharpMoveToInbox';
import { TwoToneMoveToInbox } from './TwoToneMoveToInbox';
export var MoveToInbox =
/*#__PURE__*/
function MoveToInbox(props) {
  return createThemedIcon(props, FilledMoveToInbox, OutlineMoveToInbox, RoundMoveToInbox, SharpMoveToInbox, TwoToneMoveToInbox);
};