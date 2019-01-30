import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFilterFrames } from './FilledFilterFrames';
import { OutlineFilterFrames } from './OutlineFilterFrames';
import { RoundFilterFrames } from './RoundFilterFrames';
import { SharpFilterFrames } from './SharpFilterFrames';
import { TwoToneFilterFrames } from './TwoToneFilterFrames';
export var FilterFrames =
/*#__PURE__*/
function FilterFrames(props) {
  return createThemedIcon(props, FilledFilterFrames, OutlineFilterFrames, RoundFilterFrames, SharpFilterFrames, TwoToneFilterFrames);
};