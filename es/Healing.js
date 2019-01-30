import { createThemedIcon } from './utils/createThemedIcon';
import { FilledHealing } from './FilledHealing';
import { OutlineHealing } from './OutlineHealing';
import { RoundHealing } from './RoundHealing';
import { SharpHealing } from './SharpHealing';
import { TwoToneHealing } from './TwoToneHealing';
export var Healing =
/*#__PURE__*/
function Healing(props) {
  return createThemedIcon(props, FilledHealing, OutlineHealing, RoundHealing, SharpHealing, TwoToneHealing);
};