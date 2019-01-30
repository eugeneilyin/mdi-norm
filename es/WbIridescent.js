import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWbIridescent } from './FilledWbIridescent';
import { OutlineWbIridescent } from './OutlineWbIridescent';
import { RoundWbIridescent } from './RoundWbIridescent';
import { SharpWbIridescent } from './SharpWbIridescent';
import { TwoToneWbIridescent } from './TwoToneWbIridescent';
export var WbIridescent =
/*#__PURE__*/
function WbIridescent(props) {
  return createThemedIcon(props, FilledWbIridescent, OutlineWbIridescent, RoundWbIridescent, SharpWbIridescent, TwoToneWbIridescent);
};