import { createThemedIcon } from './utils/createThemedIcon';
import { FilledChromeReaderMode } from './FilledChromeReaderMode';
import { OutlineChromeReaderMode } from './OutlineChromeReaderMode';
import { RoundChromeReaderMode } from './RoundChromeReaderMode';
import { SharpChromeReaderMode } from './SharpChromeReaderMode';
import { TwoToneChromeReaderMode } from './TwoToneChromeReaderMode';
export var ChromeReaderMode =
/*#__PURE__*/
function ChromeReaderMode(props) {
  return createThemedIcon(props, FilledChromeReaderMode, OutlineChromeReaderMode, RoundChromeReaderMode, SharpChromeReaderMode, TwoToneChromeReaderMode);
};