import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBlurOff } from './FilledBlurOff';
import { OutlineBlurOff } from './OutlineBlurOff';
import { RoundBlurOff } from './RoundBlurOff';
import { SharpBlurOff } from './SharpBlurOff';
import { TwoToneBlurOff } from './TwoToneBlurOff';
export var BlurOff =
/*#__PURE__*/
function BlurOff(props) {
  return createThemedIcon(props, FilledBlurOff, OutlineBlurOff, RoundBlurOff, SharpBlurOff, TwoToneBlurOff);
};