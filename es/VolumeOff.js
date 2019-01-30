import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVolumeOff } from './FilledVolumeOff';
import { OutlineVolumeOff } from './OutlineVolumeOff';
import { RoundVolumeOff } from './RoundVolumeOff';
import { SharpVolumeOff } from './SharpVolumeOff';
import { TwoToneVolumeOff } from './TwoToneVolumeOff';
export var VolumeOff =
/*#__PURE__*/
function VolumeOff(props) {
  return createThemedIcon(props, FilledVolumeOff, OutlineVolumeOff, RoundVolumeOff, SharpVolumeOff, TwoToneVolumeOff);
};