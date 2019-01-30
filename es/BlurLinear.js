import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBlurLinear } from './FilledBlurLinear';
import { OutlineBlurLinear } from './OutlineBlurLinear';
import { RoundBlurLinear } from './RoundBlurLinear';
import { SharpBlurLinear } from './SharpBlurLinear';
import { TwoToneBlurLinear } from './TwoToneBlurLinear';
export var BlurLinear =
/*#__PURE__*/
function BlurLinear(props) {
  return createThemedIcon(props, FilledBlurLinear, OutlineBlurLinear, RoundBlurLinear, SharpBlurLinear, TwoToneBlurLinear);
};