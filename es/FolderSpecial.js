import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFolderSpecial } from './FilledFolderSpecial';
import { OutlineFolderSpecial } from './OutlineFolderSpecial';
import { RoundFolderSpecial } from './RoundFolderSpecial';
import { SharpFolderSpecial } from './SharpFolderSpecial';
import { TwoToneFolderSpecial } from './TwoToneFolderSpecial';
export var FolderSpecial =
/*#__PURE__*/
function FolderSpecial(props) {
  return createThemedIcon(props, FilledFolderSpecial, OutlineFolderSpecial, RoundFolderSpecial, SharpFolderSpecial, TwoToneFolderSpecial);
};