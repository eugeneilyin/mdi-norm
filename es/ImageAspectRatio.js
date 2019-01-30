import { createThemedIcon } from './utils/createThemedIcon';
import { FilledImageAspectRatio } from './FilledImageAspectRatio';
import { OutlineImageAspectRatio } from './OutlineImageAspectRatio';
import { RoundImageAspectRatio } from './RoundImageAspectRatio';
import { SharpImageAspectRatio } from './SharpImageAspectRatio';
import { TwoToneImageAspectRatio } from './TwoToneImageAspectRatio';
export var ImageAspectRatio =
/*#__PURE__*/
function ImageAspectRatio(props) {
  return createThemedIcon(props, FilledImageAspectRatio, OutlineImageAspectRatio, RoundImageAspectRatio, SharpImageAspectRatio, TwoToneImageAspectRatio);
};