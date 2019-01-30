import { createThemedIcon } from './utils/createThemedIcon';
import { FilledImportantDevices } from './FilledImportantDevices';
import { OutlineImportantDevices } from './OutlineImportantDevices';
import { RoundImportantDevices } from './RoundImportantDevices';
import { SharpImportantDevices } from './SharpImportantDevices';
import { TwoToneImportantDevices } from './TwoToneImportantDevices';
export var ImportantDevices =
/*#__PURE__*/
function ImportantDevices(props) {
  return createThemedIcon(props, FilledImportantDevices, OutlineImportantDevices, RoundImportantDevices, SharpImportantDevices, TwoToneImportantDevices);
};