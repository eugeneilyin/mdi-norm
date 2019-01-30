import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAttachFile } from './FilledAttachFile';
import { OutlineAttachFile } from './OutlineAttachFile';
import { RoundAttachFile } from './RoundAttachFile';
import { SharpAttachFile } from './SharpAttachFile';
import { TwoToneAttachFile } from './TwoToneAttachFile';
export var AttachFile =
/*#__PURE__*/
function AttachFile(props) {
  return createThemedIcon(props, FilledAttachFile, OutlineAttachFile, RoundAttachFile, SharpAttachFile, TwoToneAttachFile);
};