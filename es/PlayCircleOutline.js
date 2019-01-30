import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPlayCircleOutline } from './FilledPlayCircleOutline';
import { OutlinePlayCircleOutline } from './OutlinePlayCircleOutline';
import { RoundPlayCircleOutline } from './RoundPlayCircleOutline';
import { SharpPlayCircleOutline } from './SharpPlayCircleOutline';
import { TwoTonePlayCircleOutline } from './TwoTonePlayCircleOutline';
export var PlayCircleOutline =
/*#__PURE__*/
function PlayCircleOutline(props) {
  return createThemedIcon(props, FilledPlayCircleOutline, OutlinePlayCircleOutline, RoundPlayCircleOutline, SharpPlayCircleOutline, TwoTonePlayCircleOutline);
};