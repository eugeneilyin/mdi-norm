import { createThemedIcon } from './utils/createThemedIcon';
import { FilledHdrStrong } from './FilledHdrStrong';
import { OutlineHdrStrong } from './OutlineHdrStrong';
import { RoundHdrStrong } from './RoundHdrStrong';
import { SharpHdrStrong } from './SharpHdrStrong';
import { TwoToneHdrStrong } from './TwoToneHdrStrong';
export var HdrStrong =
/*#__PURE__*/
function HdrStrong(props) {
  return createThemedIcon(props, FilledHdrStrong, OutlineHdrStrong, RoundHdrStrong, SharpHdrStrong, TwoToneHdrStrong);
};