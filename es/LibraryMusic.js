import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLibraryMusic } from './FilledLibraryMusic';
import { OutlineLibraryMusic } from './OutlineLibraryMusic';
import { RoundLibraryMusic } from './RoundLibraryMusic';
import { SharpLibraryMusic } from './SharpLibraryMusic';
import { TwoToneLibraryMusic } from './TwoToneLibraryMusic';
export var LibraryMusic =
/*#__PURE__*/
function LibraryMusic(props) {
  return createThemedIcon(props, FilledLibraryMusic, OutlineLibraryMusic, RoundLibraryMusic, SharpLibraryMusic, TwoToneLibraryMusic);
};