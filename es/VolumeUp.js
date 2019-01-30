import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVolumeUp } from './FilledVolumeUp';
import { OutlineVolumeUp } from './OutlineVolumeUp';
import { RoundVolumeUp } from './RoundVolumeUp';
import { SharpVolumeUp } from './SharpVolumeUp';
import { TwoToneVolumeUp } from './TwoToneVolumeUp';
export var VolumeUp =
/*#__PURE__*/
function VolumeUp(props) {
  return createThemedIcon(props, FilledVolumeUp, OutlineVolumeUp, RoundVolumeUp, SharpVolumeUp, TwoToneVolumeUp);
};