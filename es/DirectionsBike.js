import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDirectionsBike } from './FilledDirectionsBike';
import { OutlineDirectionsBike } from './OutlineDirectionsBike';
import { RoundDirectionsBike } from './RoundDirectionsBike';
import { SharpDirectionsBike } from './SharpDirectionsBike';
import { TwoToneDirectionsBike } from './TwoToneDirectionsBike';
export var DirectionsBike =
/*#__PURE__*/
function DirectionsBike(props) {
  return createThemedIcon(props, FilledDirectionsBike, OutlineDirectionsBike, RoundDirectionsBike, SharpDirectionsBike, TwoToneDirectionsBike);
};