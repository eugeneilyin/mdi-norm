import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPanorama } from './FilledPanorama';
import { OutlinePanorama } from './OutlinePanorama';
import { RoundPanorama } from './RoundPanorama';
import { SharpPanorama } from './SharpPanorama';
import { TwoTonePanorama } from './TwoTonePanorama';
export var Panorama =
/*#__PURE__*/
function Panorama(props) {
  return createThemedIcon(props, FilledPanorama, OutlinePanorama, RoundPanorama, SharpPanorama, TwoTonePanorama);
};