import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLibraryBooks } from './FilledLibraryBooks';
import { OutlineLibraryBooks } from './OutlineLibraryBooks';
import { RoundLibraryBooks } from './RoundLibraryBooks';
import { SharpLibraryBooks } from './SharpLibraryBooks';
import { TwoToneLibraryBooks } from './TwoToneLibraryBooks';
export var LibraryBooks =
/*#__PURE__*/
function LibraryBooks(props) {
  return createThemedIcon(props, FilledLibraryBooks, OutlineLibraryBooks, RoundLibraryBooks, SharpLibraryBooks, TwoToneLibraryBooks);
};