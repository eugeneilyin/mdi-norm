import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPlaylistAdd } from './FilledPlaylistAdd';
import { OutlinePlaylistAdd } from './OutlinePlaylistAdd';
import { RoundPlaylistAdd } from './RoundPlaylistAdd';
import { SharpPlaylistAdd } from './SharpPlaylistAdd';
import { TwoTonePlaylistAdd } from './TwoTonePlaylistAdd';
export var PlaylistAdd =
/*#__PURE__*/
function PlaylistAdd(props) {
  return createThemedIcon(props, FilledPlaylistAdd, OutlinePlaylistAdd, RoundPlaylistAdd, SharpPlaylistAdd, TwoTonePlaylistAdd);
};