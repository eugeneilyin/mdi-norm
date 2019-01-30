import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAddCircle } from './FilledAddCircle';
import { OutlineAddCircle } from './OutlineAddCircle';
import { RoundAddCircle } from './RoundAddCircle';
import { SharpAddCircle } from './SharpAddCircle';
import { TwoToneAddCircle } from './TwoToneAddCircle';
export var AddCircle =
/*#__PURE__*/
function AddCircle(props) {
  return createThemedIcon(props, FilledAddCircle, OutlineAddCircle, RoundAddCircle, SharpAddCircle, TwoToneAddCircle);
};