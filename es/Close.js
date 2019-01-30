import { createThemedIcon } from './utils/createThemedIcon';
import { FilledClose } from './FilledClose';
import { OutlineClose } from './OutlineClose';
import { RoundClose } from './RoundClose';
import { SharpClose } from './SharpClose';
import { TwoToneClose } from './TwoToneClose';
export var Close =
/*#__PURE__*/
function Close(props) {
  return createThemedIcon(props, FilledClose, OutlineClose, RoundClose, SharpClose, TwoToneClose);
};