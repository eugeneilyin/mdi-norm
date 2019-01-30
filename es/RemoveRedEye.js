import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRemoveRedEye } from './FilledRemoveRedEye';
import { OutlineRemoveRedEye } from './OutlineRemoveRedEye';
import { RoundRemoveRedEye } from './RoundRemoveRedEye';
import { SharpRemoveRedEye } from './SharpRemoveRedEye';
import { TwoToneRemoveRedEye } from './TwoToneRemoveRedEye';
export var RemoveRedEye =
/*#__PURE__*/
function RemoveRedEye(props) {
  return createThemedIcon(props, FilledRemoveRedEye, OutlineRemoveRedEye, RoundRemoveRedEye, SharpRemoveRedEye, TwoToneRemoveRedEye);
};