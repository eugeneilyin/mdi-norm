import { createThemedIcon } from './utils/createThemedIcon';
import { FilledChildCare } from './FilledChildCare';
import { OutlineChildCare } from './OutlineChildCare';
import { RoundChildCare } from './RoundChildCare';
import { SharpChildCare } from './SharpChildCare';
import { TwoToneChildCare } from './TwoToneChildCare';
export var ChildCare =
/*#__PURE__*/
function ChildCare(props) {
  return createThemedIcon(props, FilledChildCare, OutlineChildCare, RoundChildCare, SharpChildCare, TwoToneChildCare);
};