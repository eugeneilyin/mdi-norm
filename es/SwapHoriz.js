import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSwapHoriz } from './FilledSwapHoriz';
import { OutlineSwapHoriz } from './OutlineSwapHoriz';
import { RoundSwapHoriz } from './RoundSwapHoriz';
import { SharpSwapHoriz } from './SharpSwapHoriz';
import { TwoToneSwapHoriz } from './TwoToneSwapHoriz';
export var SwapHoriz =
/*#__PURE__*/
function SwapHoriz(props) {
  return createThemedIcon(props, FilledSwapHoriz, OutlineSwapHoriz, RoundSwapHoriz, SharpSwapHoriz, TwoToneSwapHoriz);
};