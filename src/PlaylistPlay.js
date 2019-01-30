import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPlaylistPlay } from './FilledPlaylistPlay'
import { OutlinePlaylistPlay } from './OutlinePlaylistPlay'
import { RoundPlaylistPlay } from './RoundPlaylistPlay'
import { SharpPlaylistPlay } from './SharpPlaylistPlay'
import { TwoTonePlaylistPlay } from './TwoTonePlaylistPlay'

export const PlaylistPlay = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPlaylistPlay, OutlinePlaylistPlay, RoundPlaylistPlay, SharpPlaylistPlay, TwoTonePlaylistPlay)
