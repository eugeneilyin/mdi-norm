import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPanoramaHorizontal } from './FilledPanoramaHorizontal';
import { OutlinePanoramaHorizontal } from './OutlinePanoramaHorizontal';
import { RoundPanoramaHorizontal } from './RoundPanoramaHorizontal';
import { SharpPanoramaHorizontal } from './SharpPanoramaHorizontal';
import { TwoTonePanoramaHorizontal } from './TwoTonePanoramaHorizontal';
export var PanoramaHorizontal =
/*#__PURE__*/
function PanoramaHorizontal(props) {
  return createThemedIcon(props, FilledPanoramaHorizontal, OutlinePanoramaHorizontal, RoundPanoramaHorizontal, SharpPanoramaHorizontal, TwoTonePanoramaHorizontal);
};