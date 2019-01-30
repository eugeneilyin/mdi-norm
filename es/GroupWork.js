import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGroupWork } from './FilledGroupWork';
import { OutlineGroupWork } from './OutlineGroupWork';
import { RoundGroupWork } from './RoundGroupWork';
import { SharpGroupWork } from './SharpGroupWork';
import { TwoToneGroupWork } from './TwoToneGroupWork';
export var GroupWork =
/*#__PURE__*/
function GroupWork(props) {
  return createThemedIcon(props, FilledGroupWork, OutlineGroupWork, RoundGroupWork, SharpGroupWork, TwoToneGroupWork);
};