import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPlaylistPlay } from './FilledPlaylistPlay';
import { OutlinePlaylistPlay } from './OutlinePlaylistPlay';
import { RoundPlaylistPlay } from './RoundPlaylistPlay';
import { SharpPlaylistPlay } from './SharpPlaylistPlay';
import { TwoTonePlaylistPlay } from './TwoTonePlaylistPlay';
export var PlaylistPlay =
/*#__PURE__*/
function PlaylistPlay(props) {
  return createThemedIcon(props, FilledPlaylistPlay, OutlinePlaylistPlay, RoundPlaylistPlay, SharpPlaylistPlay, TwoTonePlaylistPlay);
};