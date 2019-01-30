import { createThemedIcon } from './utils/createThemedIcon';
import { FilledReply } from './FilledReply';
import { OutlineReply } from './OutlineReply';
import { RoundReply } from './RoundReply';
import { SharpReply } from './SharpReply';
import { TwoToneReply } from './TwoToneReply';
export var Reply =
/*#__PURE__*/
function Reply(props) {
  return createThemedIcon(props, FilledReply, OutlineReply, RoundReply, SharpReply, TwoToneReply);
};