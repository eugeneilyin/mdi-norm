import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSatellite } from './FilledSatellite';
import { OutlineSatellite } from './OutlineSatellite';
import { RoundSatellite } from './RoundSatellite';
import { SharpSatellite } from './SharpSatellite';
import { TwoToneSatellite } from './TwoToneSatellite';
export var Satellite =
/*#__PURE__*/
function Satellite(props) {
  return createThemedIcon(props, FilledSatellite, OutlineSatellite, RoundSatellite, SharpSatellite, TwoToneSatellite);
};