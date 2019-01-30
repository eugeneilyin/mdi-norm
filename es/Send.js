import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSend } from './FilledSend';
import { OutlineSend } from './OutlineSend';
import { RoundSend } from './RoundSend';
import { SharpSend } from './SharpSend';
import { TwoToneSend } from './TwoToneSend';
export var Send =
/*#__PURE__*/
function Send(props) {
  return createThemedIcon(props, FilledSend, OutlineSend, RoundSend, SharpSend, TwoToneSend);
};