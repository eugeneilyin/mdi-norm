import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMusicVideo } from './FilledMusicVideo';
import { OutlineMusicVideo } from './OutlineMusicVideo';
import { RoundMusicVideo } from './RoundMusicVideo';
import { SharpMusicVideo } from './SharpMusicVideo';
import { TwoToneMusicVideo } from './TwoToneMusicVideo';
export var MusicVideo =
/*#__PURE__*/
function MusicVideo(props) {
  return createThemedIcon(props, FilledMusicVideo, OutlineMusicVideo, RoundMusicVideo, SharpMusicVideo, TwoToneMusicVideo);
};