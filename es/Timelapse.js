import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTimelapse } from './FilledTimelapse';
import { OutlineTimelapse } from './OutlineTimelapse';
import { RoundTimelapse } from './RoundTimelapse';
import { SharpTimelapse } from './SharpTimelapse';
import { TwoToneTimelapse } from './TwoToneTimelapse';
export var Timelapse =
/*#__PURE__*/
function Timelapse(props) {
  return createThemedIcon(props, FilledTimelapse, OutlineTimelapse, RoundTimelapse, SharpTimelapse, TwoToneTimelapse);
};