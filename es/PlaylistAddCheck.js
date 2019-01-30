import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPlaylistAddCheck } from './FilledPlaylistAddCheck';
import { OutlinePlaylistAddCheck } from './OutlinePlaylistAddCheck';
import { RoundPlaylistAddCheck } from './RoundPlaylistAddCheck';
import { SharpPlaylistAddCheck } from './SharpPlaylistAddCheck';
import { TwoTonePlaylistAddCheck } from './TwoTonePlaylistAddCheck';
export var PlaylistAddCheck =
/*#__PURE__*/
function PlaylistAddCheck(props) {
  return createThemedIcon(props, FilledPlaylistAddCheck, OutlinePlaylistAddCheck, RoundPlaylistAddCheck, SharpPlaylistAddCheck, TwoTonePlaylistAddCheck);
};