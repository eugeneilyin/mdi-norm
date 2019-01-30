import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBlurCircular } from './FilledBlurCircular';
import { OutlineBlurCircular } from './OutlineBlurCircular';
import { RoundBlurCircular } from './RoundBlurCircular';
import { SharpBlurCircular } from './SharpBlurCircular';
import { TwoToneBlurCircular } from './TwoToneBlurCircular';
export var BlurCircular =
/*#__PURE__*/
function BlurCircular(props) {
  return createThemedIcon(props, FilledBlurCircular, OutlineBlurCircular, RoundBlurCircular, SharpBlurCircular, TwoToneBlurCircular);
};