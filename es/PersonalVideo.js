import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPersonalVideo } from './FilledPersonalVideo';
import { OutlinePersonalVideo } from './OutlinePersonalVideo';
import { RoundPersonalVideo } from './RoundPersonalVideo';
import { SharpPersonalVideo } from './SharpPersonalVideo';
import { TwoTonePersonalVideo } from './TwoTonePersonalVideo';
export var PersonalVideo =
/*#__PURE__*/
function PersonalVideo(props) {
  return createThemedIcon(props, FilledPersonalVideo, OutlinePersonalVideo, RoundPersonalVideo, SharpPersonalVideo, TwoTonePersonalVideo);
};