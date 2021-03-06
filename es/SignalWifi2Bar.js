import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSignalWifi2Bar } from './FilledSignalWifi2Bar';
import { OutlineSignalWifi2Bar } from './OutlineSignalWifi2Bar';
import { RoundSignalWifi2Bar } from './RoundSignalWifi2Bar';
import { SharpSignalWifi2Bar } from './SharpSignalWifi2Bar';
import { TwoToneSignalWifi2Bar } from './TwoToneSignalWifi2Bar';
export var SignalWifi2Bar =
/*#__PURE__*/
function SignalWifi2Bar(props) {
  return createThemedIcon(props, FilledSignalWifi2Bar, OutlineSignalWifi2Bar, RoundSignalWifi2Bar, SharpSignalWifi2Bar, TwoToneSignalWifi2Bar);
};