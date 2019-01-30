import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDirectionsBus } from './FilledDirectionsBus';
import { OutlineDirectionsBus } from './OutlineDirectionsBus';
import { RoundDirectionsBus } from './RoundDirectionsBus';
import { SharpDirectionsBus } from './SharpDirectionsBus';
import { TwoToneDirectionsBus } from './TwoToneDirectionsBus';
export var DirectionsBus =
/*#__PURE__*/
function DirectionsBus(props) {
  return createThemedIcon(props, FilledDirectionsBus, OutlineDirectionsBus, RoundDirectionsBus, SharpDirectionsBus, TwoToneDirectionsBus);
};