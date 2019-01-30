import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAccountBox } from './FilledAccountBox';
import { OutlineAccountBox } from './OutlineAccountBox';
import { RoundAccountBox } from './RoundAccountBox';
import { SharpAccountBox } from './SharpAccountBox';
import { TwoToneAccountBox } from './TwoToneAccountBox';
export var AccountBox =
/*#__PURE__*/
function AccountBox(props) {
  return createThemedIcon(props, FilledAccountBox, OutlineAccountBox, RoundAccountBox, SharpAccountBox, TwoToneAccountBox);
};