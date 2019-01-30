import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSwapVert } from './FilledSwapVert';
import { OutlineSwapVert } from './OutlineSwapVert';
import { RoundSwapVert } from './RoundSwapVert';
import { SharpSwapVert } from './SharpSwapVert';
import { TwoToneSwapVert } from './TwoToneSwapVert';
export var SwapVert =
/*#__PURE__*/
function SwapVert(props) {
  return createThemedIcon(props, FilledSwapVert, OutlineSwapVert, RoundSwapVert, SharpSwapVert, TwoToneSwapVert);
};