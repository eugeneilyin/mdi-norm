import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFileCopy } from './FilledFileCopy';
import { OutlineFileCopy } from './OutlineFileCopy';
import { RoundFileCopy } from './RoundFileCopy';
import { SharpFileCopy } from './SharpFileCopy';
import { TwoToneFileCopy } from './TwoToneFileCopy';
export var FileCopy =
/*#__PURE__*/
function FileCopy(props) {
  return createThemedIcon(props, FilledFileCopy, OutlineFileCopy, RoundFileCopy, SharpFileCopy, TwoToneFileCopy);
};