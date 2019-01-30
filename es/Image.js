import { createThemedIcon } from './utils/createThemedIcon';
import { FilledImage } from './FilledImage';
import { OutlineImage } from './OutlineImage';
import { RoundImage } from './RoundImage';
import { SharpImage } from './SharpImage';
import { TwoToneImage } from './TwoToneImage';
export var Image =
/*#__PURE__*/
function Image(props) {
  return createThemedIcon(props, FilledImage, OutlineImage, RoundImage, SharpImage, TwoToneImage);
};