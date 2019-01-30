import { createThemedIcon } from './utils/createThemedIcon';
import { FilledHistory } from './FilledHistory';
import { OutlineHistory } from './OutlineHistory';
import { RoundHistory } from './RoundHistory';
import { SharpHistory } from './SharpHistory';
import { TwoToneHistory } from './TwoToneHistory';
export var History =
/*#__PURE__*/
function History(props) {
  return createThemedIcon(props, FilledHistory, OutlineHistory, RoundHistory, SharpHistory, TwoToneHistory);
};