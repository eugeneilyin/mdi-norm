import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMusicOff } from './FilledMusicOff';
import { OutlineMusicOff } from './OutlineMusicOff';
import { RoundMusicOff } from './RoundMusicOff';
import { SharpMusicOff } from './SharpMusicOff';
import { TwoToneMusicOff } from './TwoToneMusicOff';
export var MusicOff =
/*#__PURE__*/
function MusicOff(props) {
  return createThemedIcon(props, FilledMusicOff, OutlineMusicOff, RoundMusicOff, SharpMusicOff, TwoToneMusicOff);
};