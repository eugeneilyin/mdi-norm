import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAddBox } from './FilledAddBox';
import { OutlineAddBox } from './OutlineAddBox';
import { RoundAddBox } from './RoundAddBox';
import { SharpAddBox } from './SharpAddBox';
import { TwoToneAddBox } from './TwoToneAddBox';
export var AddBox =
/*#__PURE__*/
function AddBox(props) {
  return createThemedIcon(props, FilledAddBox, OutlineAddBox, RoundAddBox, SharpAddBox, TwoToneAddBox);
};