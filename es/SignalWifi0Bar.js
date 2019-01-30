import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSignalWifi0Bar } from './FilledSignalWifi0Bar';
import { OutlineSignalWifi0Bar } from './OutlineSignalWifi0Bar';
import { RoundSignalWifi0Bar } from './RoundSignalWifi0Bar';
import { SharpSignalWifi0Bar } from './SharpSignalWifi0Bar';
import { TwoToneSignalWifi0Bar } from './TwoToneSignalWifi0Bar';
export var SignalWifi0Bar =
/*#__PURE__*/
function SignalWifi0Bar(props) {
  return createThemedIcon(props, FilledSignalWifi0Bar, OutlineSignalWifi0Bar, RoundSignalWifi0Bar, SharpSignalWifi0Bar, TwoToneSignalWifi0Bar);
};