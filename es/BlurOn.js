import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBlurOn } from './FilledBlurOn';
import { OutlineBlurOn } from './OutlineBlurOn';
import { RoundBlurOn } from './RoundBlurOn';
import { SharpBlurOn } from './SharpBlurOn';
import { TwoToneBlurOn } from './TwoToneBlurOn';
export var BlurOn =
/*#__PURE__*/
function BlurOn(props) {
  return createThemedIcon(props, FilledBlurOn, OutlineBlurOn, RoundBlurOn, SharpBlurOn, TwoToneBlurOn);
};