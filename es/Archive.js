import { createThemedIcon } from './utils/createThemedIcon';
import { FilledArchive } from './FilledArchive';
import { OutlineArchive } from './OutlineArchive';
import { RoundArchive } from './RoundArchive';
import { SharpArchive } from './SharpArchive';
import { TwoToneArchive } from './TwoToneArchive';
export var Archive =
/*#__PURE__*/
function Archive(props) {
  return createThemedIcon(props, FilledArchive, OutlineArchive, RoundArchive, SharpArchive, TwoToneArchive);
};