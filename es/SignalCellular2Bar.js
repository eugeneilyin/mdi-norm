import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSignalCellular2Bar } from './FilledSignalCellular2Bar';
import { OutlineSignalCellular2Bar } from './OutlineSignalCellular2Bar';
import { RoundSignalCellular2Bar } from './RoundSignalCellular2Bar';
import { SharpSignalCellular2Bar } from './SharpSignalCellular2Bar';
import { TwoToneSignalCellular2Bar } from './TwoToneSignalCellular2Bar';
export var SignalCellular2Bar =
/*#__PURE__*/
function SignalCellular2Bar(props) {
  return createThemedIcon(props, FilledSignalCellular2Bar, OutlineSignalCellular2Bar, RoundSignalCellular2Bar, SharpSignalCellular2Bar, TwoToneSignalCellular2Bar);
};