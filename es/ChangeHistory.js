import { createThemedIcon } from './utils/createThemedIcon';
import { FilledChangeHistory } from './FilledChangeHistory';
import { OutlineChangeHistory } from './OutlineChangeHistory';
import { RoundChangeHistory } from './RoundChangeHistory';
import { SharpChangeHistory } from './SharpChangeHistory';
import { TwoToneChangeHistory } from './TwoToneChangeHistory';
export var ChangeHistory =
/*#__PURE__*/
function ChangeHistory(props) {
  return createThemedIcon(props, FilledChangeHistory, OutlineChangeHistory, RoundChangeHistory, SharpChangeHistory, TwoToneChangeHistory);
};