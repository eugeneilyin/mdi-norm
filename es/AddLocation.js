import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAddLocation } from './FilledAddLocation';
import { OutlineAddLocation } from './OutlineAddLocation';
import { RoundAddLocation } from './RoundAddLocation';
import { SharpAddLocation } from './SharpAddLocation';
import { TwoToneAddLocation } from './TwoToneAddLocation';
export var AddLocation =
/*#__PURE__*/
function AddLocation(props) {
  return createThemedIcon(props, FilledAddLocation, OutlineAddLocation, RoundAddLocation, SharpAddLocation, TwoToneAddLocation);
};