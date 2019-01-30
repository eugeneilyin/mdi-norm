import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVolumeDown } from './FilledVolumeDown';
import { OutlineVolumeDown } from './OutlineVolumeDown';
import { RoundVolumeDown } from './RoundVolumeDown';
import { SharpVolumeDown } from './SharpVolumeDown';
import { TwoToneVolumeDown } from './TwoToneVolumeDown';
export var VolumeDown =
/*#__PURE__*/
function VolumeDown(props) {
  return createThemedIcon(props, FilledVolumeDown, OutlineVolumeDown, RoundVolumeDown, SharpVolumeDown, TwoToneVolumeDown);
};