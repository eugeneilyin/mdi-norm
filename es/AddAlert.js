import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAddAlert } from './FilledAddAlert';
import { OutlineAddAlert } from './OutlineAddAlert';
import { RoundAddAlert } from './RoundAddAlert';
import { SharpAddAlert } from './SharpAddAlert';
import { TwoToneAddAlert } from './TwoToneAddAlert';
export var AddAlert =
/*#__PURE__*/
function AddAlert(props) {
  return createThemedIcon(props, FilledAddAlert, OutlineAddAlert, RoundAddAlert, SharpAddAlert, TwoToneAddAlert);
};