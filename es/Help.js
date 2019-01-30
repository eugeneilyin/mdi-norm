import { createThemedIcon } from './utils/createThemedIcon';
import { FilledHelp } from './FilledHelp';
import { OutlineHelp } from './OutlineHelp';
import { RoundHelp } from './RoundHelp';
import { SharpHelp } from './SharpHelp';
import { TwoToneHelp } from './TwoToneHelp';
export var Help =
/*#__PURE__*/
function Help(props) {
  return createThemedIcon(props, FilledHelp, OutlineHelp, RoundHelp, SharpHelp, TwoToneHelp);
};