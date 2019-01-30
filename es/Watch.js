import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWatch } from './FilledWatch';
import { OutlineWatch } from './OutlineWatch';
import { RoundWatch } from './RoundWatch';
import { SharpWatch } from './SharpWatch';
import { TwoToneWatch } from './TwoToneWatch';
export var Watch =
/*#__PURE__*/
function Watch(props) {
  return createThemedIcon(props, FilledWatch, OutlineWatch, RoundWatch, SharpWatch, TwoToneWatch);
};