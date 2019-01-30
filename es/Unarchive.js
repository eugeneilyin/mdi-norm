import { createThemedIcon } from './utils/createThemedIcon';
import { FilledUnarchive } from './FilledUnarchive';
import { OutlineUnarchive } from './OutlineUnarchive';
import { RoundUnarchive } from './RoundUnarchive';
import { SharpUnarchive } from './SharpUnarchive';
import { TwoToneUnarchive } from './TwoToneUnarchive';
export var Unarchive =
/*#__PURE__*/
function Unarchive(props) {
  return createThemedIcon(props, FilledUnarchive, OutlineUnarchive, RoundUnarchive, SharpUnarchive, TwoToneUnarchive);
};