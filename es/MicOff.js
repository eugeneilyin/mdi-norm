import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMicOff } from './FilledMicOff';
import { OutlineMicOff } from './OutlineMicOff';
import { RoundMicOff } from './RoundMicOff';
import { SharpMicOff } from './SharpMicOff';
import { TwoToneMicOff } from './TwoToneMicOff';
export var MicOff =
/*#__PURE__*/
function MicOff(props) {
  return createThemedIcon(props, FilledMicOff, OutlineMicOff, RoundMicOff, SharpMicOff, TwoToneMicOff);
};