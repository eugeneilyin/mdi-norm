import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPanoramaFishEye } from './FilledPanoramaFishEye';
import { OutlinePanoramaFishEye } from './OutlinePanoramaFishEye';
import { RoundPanoramaFishEye } from './RoundPanoramaFishEye';
import { SharpPanoramaFishEye } from './SharpPanoramaFishEye';
import { TwoTonePanoramaFishEye } from './TwoTonePanoramaFishEye';
export var PanoramaFishEye =
/*#__PURE__*/
function PanoramaFishEye(props) {
  return createThemedIcon(props, FilledPanoramaFishEye, OutlinePanoramaFishEye, RoundPanoramaFishEye, SharpPanoramaFishEye, TwoTonePanoramaFishEye);
};