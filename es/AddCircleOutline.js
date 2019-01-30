import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAddCircleOutline } from './FilledAddCircleOutline';
import { OutlineAddCircleOutline } from './OutlineAddCircleOutline';
import { RoundAddCircleOutline } from './RoundAddCircleOutline';
import { SharpAddCircleOutline } from './SharpAddCircleOutline';
import { TwoToneAddCircleOutline } from './TwoToneAddCircleOutline';
export var AddCircleOutline =
/*#__PURE__*/
function AddCircleOutline(props) {
  return createThemedIcon(props, FilledAddCircleOutline, OutlineAddCircleOutline, RoundAddCircleOutline, SharpAddCircleOutline, TwoToneAddCircleOutline);
};