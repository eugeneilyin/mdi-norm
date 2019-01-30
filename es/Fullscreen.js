import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFullscreen } from './FilledFullscreen';
import { OutlineFullscreen } from './OutlineFullscreen';
import { RoundFullscreen } from './RoundFullscreen';
import { SharpFullscreen } from './SharpFullscreen';
import { TwoToneFullscreen } from './TwoToneFullscreen';
export var Fullscreen =
/*#__PURE__*/
function Fullscreen(props) {
  return createThemedIcon(props, FilledFullscreen, OutlineFullscreen, RoundFullscreen, SharpFullscreen, TwoToneFullscreen);
};