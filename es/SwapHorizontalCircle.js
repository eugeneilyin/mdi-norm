import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSwapHorizontalCircle } from './FilledSwapHorizontalCircle';
import { OutlineSwapHorizontalCircle } from './OutlineSwapHorizontalCircle';
import { RoundSwapHorizontalCircle } from './RoundSwapHorizontalCircle';
import { SharpSwapHorizontalCircle } from './SharpSwapHorizontalCircle';
import { TwoToneSwapHorizontalCircle } from './TwoToneSwapHorizontalCircle';
export var SwapHorizontalCircle =
/*#__PURE__*/
function SwapHorizontalCircle(props) {
  return createThemedIcon(props, FilledSwapHorizontalCircle, OutlineSwapHorizontalCircle, RoundSwapHorizontalCircle, SharpSwapHorizontalCircle, TwoToneSwapHorizontalCircle);
};