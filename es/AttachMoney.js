import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAttachMoney } from './FilledAttachMoney';
import { OutlineAttachMoney } from './OutlineAttachMoney';
import { RoundAttachMoney } from './RoundAttachMoney';
import { SharpAttachMoney } from './SharpAttachMoney';
import { TwoToneAttachMoney } from './TwoToneAttachMoney';
export var AttachMoney =
/*#__PURE__*/
function AttachMoney(props) {
  return createThemedIcon(props, FilledAttachMoney, OutlineAttachMoney, RoundAttachMoney, SharpAttachMoney, TwoToneAttachMoney);
};