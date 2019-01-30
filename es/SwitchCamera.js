import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSwitchCamera } from './FilledSwitchCamera';
import { OutlineSwitchCamera } from './OutlineSwitchCamera';
import { RoundSwitchCamera } from './RoundSwitchCamera';
import { SharpSwitchCamera } from './SharpSwitchCamera';
import { TwoToneSwitchCamera } from './TwoToneSwitchCamera';
export var SwitchCamera =
/*#__PURE__*/
function SwitchCamera(props) {
  return createThemedIcon(props, FilledSwitchCamera, OutlineSwitchCamera, RoundSwitchCamera, SharpSwitchCamera, TwoToneSwitchCamera);
};