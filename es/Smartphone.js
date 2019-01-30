import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSmartphone } from './FilledSmartphone';
import { OutlineSmartphone } from './OutlineSmartphone';
import { RoundSmartphone } from './RoundSmartphone';
import { SharpSmartphone } from './SharpSmartphone';
import { TwoToneSmartphone } from './TwoToneSmartphone';
export var Smartphone =
/*#__PURE__*/
function Smartphone(props) {
  return createThemedIcon(props, FilledSmartphone, OutlineSmartphone, RoundSmartphone, SharpSmartphone, TwoToneSmartphone);
};