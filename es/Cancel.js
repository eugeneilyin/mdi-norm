import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCancel } from './FilledCancel';
import { OutlineCancel } from './OutlineCancel';
import { RoundCancel } from './RoundCancel';
import { SharpCancel } from './SharpCancel';
import { TwoToneCancel } from './TwoToneCancel';
export var Cancel =
/*#__PURE__*/
function Cancel(props) {
  return createThemedIcon(props, FilledCancel, OutlineCancel, RoundCancel, SharpCancel, TwoToneCancel);
};