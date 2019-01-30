import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPanoramaWideAngle } from './FilledPanoramaWideAngle';
import { OutlinePanoramaWideAngle } from './OutlinePanoramaWideAngle';
import { RoundPanoramaWideAngle } from './RoundPanoramaWideAngle';
import { SharpPanoramaWideAngle } from './SharpPanoramaWideAngle';
import { TwoTonePanoramaWideAngle } from './TwoTonePanoramaWideAngle';
export var PanoramaWideAngle =
/*#__PURE__*/
function PanoramaWideAngle(props) {
  return createThemedIcon(props, FilledPanoramaWideAngle, OutlinePanoramaWideAngle, RoundPanoramaWideAngle, SharpPanoramaWideAngle, TwoTonePanoramaWideAngle);
};