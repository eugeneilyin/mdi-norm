import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSwapCalls } from './FilledSwapCalls';
import { OutlineSwapCalls } from './OutlineSwapCalls';
import { RoundSwapCalls } from './RoundSwapCalls';
import { SharpSwapCalls } from './SharpSwapCalls';
import { TwoToneSwapCalls } from './TwoToneSwapCalls';
export var SwapCalls =
/*#__PURE__*/
function SwapCalls(props) {
  return createThemedIcon(props, FilledSwapCalls, OutlineSwapCalls, RoundSwapCalls, SharpSwapCalls, TwoToneSwapCalls);
};