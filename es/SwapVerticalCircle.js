import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSwapVerticalCircle } from './FilledSwapVerticalCircle';
import { OutlineSwapVerticalCircle } from './OutlineSwapVerticalCircle';
import { RoundSwapVerticalCircle } from './RoundSwapVerticalCircle';
import { SharpSwapVerticalCircle } from './SharpSwapVerticalCircle';
import { TwoToneSwapVerticalCircle } from './TwoToneSwapVerticalCircle';
export var SwapVerticalCircle =
/*#__PURE__*/
function SwapVerticalCircle(props) {
  return createThemedIcon(props, FilledSwapVerticalCircle, OutlineSwapVerticalCircle, RoundSwapVerticalCircle, SharpSwapVerticalCircle, TwoToneSwapVerticalCircle);
};