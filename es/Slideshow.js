import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSlideshow } from './FilledSlideshow';
import { OutlineSlideshow } from './OutlineSlideshow';
import { RoundSlideshow } from './RoundSlideshow';
import { SharpSlideshow } from './SharpSlideshow';
import { TwoToneSlideshow } from './TwoToneSlideshow';
export var Slideshow =
/*#__PURE__*/
function Slideshow(props) {
  return createThemedIcon(props, FilledSlideshow, OutlineSlideshow, RoundSlideshow, SharpSlideshow, TwoToneSlideshow);
};