import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSignalWifi1Bar } from './FilledSignalWifi1Bar';
import { OutlineSignalWifi1Bar } from './OutlineSignalWifi1Bar';
import { RoundSignalWifi1Bar } from './RoundSignalWifi1Bar';
import { SharpSignalWifi1Bar } from './SharpSignalWifi1Bar';
import { TwoToneSignalWifi1Bar } from './TwoToneSignalWifi1Bar';
export var SignalWifi1Bar =
/*#__PURE__*/
function SignalWifi1Bar(props) {
  return createThemedIcon(props, FilledSignalWifi1Bar, OutlineSignalWifi1Bar, RoundSignalWifi1Bar, SharpSignalWifi1Bar, TwoToneSignalWifi1Bar);
};