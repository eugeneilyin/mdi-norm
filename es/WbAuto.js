import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWbAuto } from './FilledWbAuto';
import { OutlineWbAuto } from './OutlineWbAuto';
import { RoundWbAuto } from './RoundWbAuto';
import { SharpWbAuto } from './SharpWbAuto';
import { TwoToneWbAuto } from './TwoToneWbAuto';
export var WbAuto =
/*#__PURE__*/
function WbAuto(props) {
  return createThemedIcon(props, FilledWbAuto, OutlineWbAuto, RoundWbAuto, SharpWbAuto, TwoToneWbAuto);
};