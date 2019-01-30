import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCreateNewFolder } from './FilledCreateNewFolder';
import { OutlineCreateNewFolder } from './OutlineCreateNewFolder';
import { RoundCreateNewFolder } from './RoundCreateNewFolder';
import { SharpCreateNewFolder } from './SharpCreateNewFolder';
import { TwoToneCreateNewFolder } from './TwoToneCreateNewFolder';
export var CreateNewFolder =
/*#__PURE__*/
function CreateNewFolder(props) {
  return createThemedIcon(props, FilledCreateNewFolder, OutlineCreateNewFolder, RoundCreateNewFolder, SharpCreateNewFolder, TwoToneCreateNewFolder);
};