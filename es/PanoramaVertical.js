import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPanoramaVertical } from './FilledPanoramaVertical';
import { OutlinePanoramaVertical } from './OutlinePanoramaVertical';
import { RoundPanoramaVertical } from './RoundPanoramaVertical';
import { SharpPanoramaVertical } from './SharpPanoramaVertical';
import { TwoTonePanoramaVertical } from './TwoTonePanoramaVertical';
export var PanoramaVertical =
/*#__PURE__*/
function PanoramaVertical(props) {
  return createThemedIcon(props, FilledPanoramaVertical, OutlinePanoramaVertical, RoundPanoramaVertical, SharpPanoramaVertical, TwoTonePanoramaVertical);
};