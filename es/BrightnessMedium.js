import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBrightnessMedium } from './FilledBrightnessMedium';
import { OutlineBrightnessMedium } from './OutlineBrightnessMedium';
import { RoundBrightnessMedium } from './RoundBrightnessMedium';
import { SharpBrightnessMedium } from './SharpBrightnessMedium';
import { TwoToneBrightnessMedium } from './TwoToneBrightnessMedium';
export var BrightnessMedium =
/*#__PURE__*/
function BrightnessMedium(props) {
  return createThemedIcon(props, FilledBrightnessMedium, OutlineBrightnessMedium, RoundBrightnessMedium, SharpBrightnessMedium, TwoToneBrightnessMedium);
};