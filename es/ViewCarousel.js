import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewCarousel } from './FilledViewCarousel';
import { OutlineViewCarousel } from './OutlineViewCarousel';
import { RoundViewCarousel } from './RoundViewCarousel';
import { SharpViewCarousel } from './SharpViewCarousel';
import { TwoToneViewCarousel } from './TwoToneViewCarousel';
export var ViewCarousel =
/*#__PURE__*/
function ViewCarousel(props) {
  return createThemedIcon(props, FilledViewCarousel, OutlineViewCarousel, RoundViewCarousel, SharpViewCarousel, TwoToneViewCarousel);
};