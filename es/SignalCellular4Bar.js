import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSignalCellular4Bar } from './FilledSignalCellular4Bar';
import { OutlineSignalCellular4Bar } from './OutlineSignalCellular4Bar';
import { RoundSignalCellular4Bar } from './RoundSignalCellular4Bar';
import { SharpSignalCellular4Bar } from './SharpSignalCellular4Bar';
import { TwoToneSignalCellular4Bar } from './TwoToneSignalCellular4Bar';
export var SignalCellular4Bar =
/*#__PURE__*/
function SignalCellular4Bar(props) {
  return createThemedIcon(props, FilledSignalCellular4Bar, OutlineSignalCellular4Bar, RoundSignalCellular4Bar, SharpSignalCellular4Bar, TwoToneSignalCellular4Bar);
};