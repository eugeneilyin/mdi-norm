import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPrintDisabled } from './FilledPrintDisabled';
import { OutlinePrintDisabled } from './OutlinePrintDisabled';
import { RoundPrintDisabled } from './RoundPrintDisabled';
import { SharpPrintDisabled } from './SharpPrintDisabled';
import { TwoTonePrintDisabled } from './TwoTonePrintDisabled';
export var PrintDisabled =
/*#__PURE__*/
function PrintDisabled(props) {
  return createThemedIcon(props, FilledPrintDisabled, OutlinePrintDisabled, RoundPrintDisabled, SharpPrintDisabled, TwoTonePrintDisabled);
};