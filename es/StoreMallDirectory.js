import { createThemedIcon } from './utils/createThemedIcon';
import { FilledStoreMallDirectory } from './FilledStoreMallDirectory';
import { OutlineStoreMallDirectory } from './OutlineStoreMallDirectory';
import { RoundStoreMallDirectory } from './RoundStoreMallDirectory';
import { SharpStoreMallDirectory } from './SharpStoreMallDirectory';
import { TwoToneStoreMallDirectory } from './TwoToneStoreMallDirectory';
export var StoreMallDirectory =
/*#__PURE__*/
function StoreMallDirectory(props) {
  return createThemedIcon(props, FilledStoreMallDirectory, OutlineStoreMallDirectory, RoundStoreMallDirectory, SharpStoreMallDirectory, TwoToneStoreMallDirectory);
};