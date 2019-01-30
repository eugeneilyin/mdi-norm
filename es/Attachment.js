import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAttachment } from './FilledAttachment';
import { OutlineAttachment } from './OutlineAttachment';
import { RoundAttachment } from './RoundAttachment';
import { SharpAttachment } from './SharpAttachment';
import { TwoToneAttachment } from './TwoToneAttachment';
export var Attachment =
/*#__PURE__*/
function Attachment(props) {
  return createThemedIcon(props, FilledAttachment, OutlineAttachment, RoundAttachment, SharpAttachment, TwoToneAttachment);
};