import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFolder } from './FilledFolder';
import { OutlineFolder } from './OutlineFolder';
import { RoundFolder } from './RoundFolder';
import { SharpFolder } from './SharpFolder';
import { TwoToneFolder } from './TwoToneFolder';
export var Folder =
/*#__PURE__*/
function Folder(props) {
  return createThemedIcon(props, FilledFolder, OutlineFolder, RoundFolder, SharpFolder, TwoToneFolder);
};