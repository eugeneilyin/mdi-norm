import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAspectRatio } from './FilledAspectRatio';
import { OutlineAspectRatio } from './OutlineAspectRatio';
import { RoundAspectRatio } from './RoundAspectRatio';
import { SharpAspectRatio } from './SharpAspectRatio';
import { TwoToneAspectRatio } from './TwoToneAspectRatio';
export var AspectRatio =
/*#__PURE__*/
function AspectRatio(props) {
  return createThemedIcon(props, FilledAspectRatio, OutlineAspectRatio, RoundAspectRatio, SharpAspectRatio, TwoToneAspectRatio);
};