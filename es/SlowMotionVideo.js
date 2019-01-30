import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSlowMotionVideo } from './FilledSlowMotionVideo';
import { OutlineSlowMotionVideo } from './OutlineSlowMotionVideo';
import { RoundSlowMotionVideo } from './RoundSlowMotionVideo';
import { SharpSlowMotionVideo } from './SharpSlowMotionVideo';
import { TwoToneSlowMotionVideo } from './TwoToneSlowMotionVideo';
export var SlowMotionVideo =
/*#__PURE__*/
function SlowMotionVideo(props) {
  return createThemedIcon(props, FilledSlowMotionVideo, OutlineSlowMotionVideo, RoundSlowMotionVideo, SharpSlowMotionVideo, TwoToneSlowMotionVideo);
};