import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPlayArrow } from './FilledPlayArrow';
import { OutlinePlayArrow } from './OutlinePlayArrow';
import { RoundPlayArrow } from './RoundPlayArrow';
import { SharpPlayArrow } from './SharpPlayArrow';
import { TwoTonePlayArrow } from './TwoTonePlayArrow';
export var PlayArrow =
/*#__PURE__*/
function PlayArrow(props) {
  return createThemedIcon(props, FilledPlayArrow, OutlinePlayArrow, RoundPlayArrow, SharpPlayArrow, TwoTonePlayArrow);
};